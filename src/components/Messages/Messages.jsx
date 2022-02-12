import React, { useState, useEffect } from 'react'
import SendMessage from './SendMessage'
import Message from './Message'
import { getMessages, sendMessage } from '../../api/api-message'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { getUserObject } from '../Users/getUserObject'
import MessagesHeader from './MessagesHeader'

const Messages = ({ displayHeader, receiverClass, receiverID }) => {
  let { id, channelId } = useParams()
  const [messageDetails, setMessageDetails] = useState([])
  const [messageParams, setMessageParams] = useState({})

  useEffect(() => {
    if (id) {
      getUserObject(id)
        .then((response) => {
          setMessageParams({
            receiver_id: response.id,
            receiver_class: 'User',
            uid: response.uid,
          })
        })
        .catch((error) => console.log(error))
    }
    if (channelId) {
      setMessageParams({
        receiver_id: receiverID,
        receiver_class: receiverClass,
      })
    }
  }, [id, channelId])

  useEffect(() => {
    if (messageParams) {
      handleMessages()
    }
  }, [messageParams])

  const handleMessages = () => {
    getMessages(messageParams)
      .then((res) => {
        const messageData = res.data.data
        if (messageData && messageData.length > 0) {
          setMessageDetails(messageData.reverse())
        } else {
          setMessageDetails([])
        }
      })
      .catch((error) => console.log(error))
  }

  const handleSendMessage = (input) => {
    sendMessage({
      receiver_id: messageParams.receiver_id,
      receiver_class: messageParams.receiver_class,
      body: input,
    })
      .then((res) => res)
      .catch((error) => console.log(error))
      .finally(() => {
        handleMessages()
      })
  }

  const messagesHeader = <MessagesHeader messageGroupName={messageParams.uid} />

  return (
    <div className="messages-container">
      {displayHeader ? displayHeader : messagesHeader}
      <div className="messages-scroll-container">
        {messageDetails && messageDetails.length > 0
          ? messageDetails.map((message, index) => {
              return (
                <Message
                  key={index}
                  sender={message.sender.email}
                  body={message.body}
                  time={moment(message.created_at).calendar()}
                />
              )
            })
          : null}
        <div className="new-message">
          {`This is the beginning of your message history with ${
            messageParams.uid ? `${messageParams.uid}` : 'this channel'
          }`}
        </div>
      </div>
      <SendMessage
        receiverName={
          messageParams.uid ? messageParams.uid : messageParams.receiverID
        }
        onClick={(input) => {
          handleSendMessage(input)
        }}
        handleKeyPress={(input) => {
          handleSendMessage(input)
        }}
      />
    </div>
  )
}

export default Messages
