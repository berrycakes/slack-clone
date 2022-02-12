import React from 'react'
import avatar from '../../avatar-placeholder.png'
import { FiChevronDown } from 'react-icons/fi'

const MessagesHeader = ({ messageGroupName }) => {
  return (
    <div className="messages-container-header">
      <img src={avatar} />
      <button className="messages-receiver-button">
        {messageGroupName}
        <FiChevronDown />
      </button>
    </div>
  )
}

export default MessagesHeader
