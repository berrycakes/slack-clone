import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'

const SendMessage = ({ onClick, handleKeyPress, receiverName = '' }) => {
  const [input, setInput] = useState('')

  return (
    <div className={'send-message-container'}>
      <div>
        <form className="send-message-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message ${receiverName}`}
            title="message-input"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleKeyPress(input)
                setInput('')
              }
            }}
          ></textarea>
          <button
            className={`send-message-button${input === '' ? '' : '-active'}`}
            type="button"
            title="send-message-button"
            onClick={() => {
              onClick(input)
              setInput('')
            }}
          >
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SendMessage
