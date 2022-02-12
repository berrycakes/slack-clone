import React, { useEffect, useState } from 'react'
import { FiAtSign, FiMoreVertical, FiPlus } from 'react-icons/fi'
import {
  IoChatbubblesOutline,
  IoChevronForwardOutline,
  IoChevronDownOutline,
} from 'react-icons/io5'
import { BsChatText } from 'react-icons/bs'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import ChannelList from '../Channel/ChannelList'
import RecentDms from '../Users/RecentDms'
import SidebarHeader from './SidebarHeader'

const Sidebar = ({
  handleOpenNewChannel,
  channels,
  headers,
  handleToggleRender
}) => {
  let navigate = useNavigate()
  let { uid } = useParams()
  const [showChannelList, setShowChannelList] = useState(true)
  const [showRecentDmList, setShowRecentDmList] = useState(true)

  useEffect(() => {}, [handleToggleRender])
  // Create a function to display list of channels
  const displayChannels = channels
    ? channels.map((channel, index) => {
        return (
          <NavLink to={`${uid}/channels/${channel.id}`} key={index}>
            <ChannelList index={index} 
            name={channel.name} 
            key={index} />
          </NavLink>
        )
      })
    : null

  const staticList = [
    { title: 'Threads', icon: <BsChatText /> },
    { title: 'All DMs', icon: <IoChatbubblesOutline /> },
    { title: 'Mentions & reactions', icon: <FiAtSign /> },
    { title: 'More', icon: <FiMoreVertical /> },
  ]

  return (
    <nav className="sidebar-container">
      <SidebarHeader />

      <ul className="sidebar-menu">
        {staticList.map((element, index) => {
          return (
            <li className="menu-options" key={index}>
              {element.icon}
              <NavLink to={'/404'}>
                <span>{element.title}</span>
              </NavLink>
            </li>
          )
        })}

        <li className="channels-dropdown">
          <div className="channels-dropdown-header">
            {showChannelList ? (
              <IoChevronDownOutline
                onClick={() => setShowChannelList(!showChannelList)}
              />
            ) : (
              <IoChevronForwardOutline
                onClick={() => setShowChannelList(!showChannelList)}
              />
            )}
            <span>Channels</span>
            <div className="sidebar-add-icon">
              <FiPlus onClick={handleOpenNewChannel} 
              title='channel-add-btn'/>
            </div>
          </div>
          {showChannelList ? (
            <ul className="channels">{displayChannels}</ul>
          ) : null}
        </li>
        <li className="direct-messages-dropdown">
          <div className="direct-messages-dropdown-header">
            {showRecentDmList ? (
              <IoChevronDownOutline
                onClick={() => setShowRecentDmList(!showRecentDmList)}
              />
            ) : (
              <IoChevronForwardOutline
                onClick={() => setShowRecentDmList(!showRecentDmList)}
              />
            )}
            <span>Direct Messages</span>
            <div className="sidebar-add-icon">
              <FiPlus onClick={() => navigate(`/${uid}/new-message`)} />
            </div>
          </div>
          {showRecentDmList ? <RecentDms loginData={headers} /> : null}
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
