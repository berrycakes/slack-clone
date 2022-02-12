import React from 'react'
import { FiLock } from 'react-icons/fi'

function ChannelList({ name, index }) {

  return (
    <li key={index} title={name}>
      <FiLock />
      <span>{name}</span>
    </li>
  )
}

export default ChannelList
