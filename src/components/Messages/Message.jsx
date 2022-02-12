import React from 'react'
import avatar from '../../avatar-placeholder.png'

const Message = ({ sender, time, body }) => {
  return (
    <div className="message-container">
      <div className="avatar">
        <img className="message-avatar" src={avatar} alt="avatar" />
      </div>
      <div className="message-details-container">
        <div className="message-headers">
          <p className="message-details-sender">{sender}</p>
          <p className="message-details-time">{time}</p>
        </div>
        <pre className="message-details-body">{body}</pre>
      </div>
    </div>
  )
}

export default Message
