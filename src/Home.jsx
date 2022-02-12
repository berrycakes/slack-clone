import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { channelCreate, channelsGet } from './api/api-channels'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import SearchBar from './components/Header/SearchBar/SearchBar'

const Home = () => {
  // Set states
  const [isNewChannelModalOpen, setNewChannelModalOpen] = useState(false)
  const [handleRender, setHandleRender] = useState(false)
  const [isSearchBarOpen, setSearchBarOpen] = useState(false)

  // Channel details
  const [channels, setChannels] = useState('')
  const [channelIds, setChannelIds] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  //Open Search Bar
  const handleOpenSearchBar = () => {
    setSearchBarOpen(!isSearchBarOpen)
  }

  // Open modal to add new channel
  const handleOpenNewChannel = () => {
    setNewChannelModalOpen(true)
  }

  // Close modal to add new channel
  const handleCloseNewChannel = () => {
    setNewChannelModalOpen(false)
  }

  // Create new channel
  const newChannel = (e) => {
    e.preventDefault()

    // get userLoggedInDetails
    let userDetails = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

    // set user_ids array for creating new channel to uid of the one creating the channel
    let user_ids = [userDetails.uid]

    // create object
    const newChannelDetails = {
      name,
      user_ids,
    }

    // call API for creating a new channel
    channelCreate(newChannelDetails)
      .then((response) => {
        console.log(response)
        if (response.data.errors != null) {
          console.log(response.config.data)
          // setHandleRender(!handleRender)
          return response
        }
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    reset()
    window.location.reload()
  }

  // Event handlers
  const handleNameInput = (e) => {
    setName(e.target.value)
  }

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    newChannel(e)
  }

  const handleClick = (e) => {
    newChannel(e)
  }

  const handleToggleRender = () => {
    setHandleRender(!handleRender)
  }

  // Reset function
  const reset = () => {
    setNewChannelModalOpen(false)
    setName('')
    setDescription('')
  }

  useEffect(() => {
    // Set user headers after login
    let userDetails = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

    const headers = {
      token: userDetails['access-token'],
      client: userDetails.client,
      expiry: userDetails.expiry,
      uid: userDetails.uid,
    }

    // Get all channels and channel Ids
    channelsGet(headers)
      .then((response) => {
        let channelObj = response.data.data
        setChannels(channelObj)
        return channelObj
      })
      .then((channelObj) => {
        let channelIdsArray = channelObj.map((array) => array.id)
        setChannelIds(channelIdsArray)
      })
      .catch((err) => console.log(err))
  }, [handleRender])

  return (
    <main className="main-container">
      {isSearchBarOpen ? (
        <SearchBar handleOpenSearchBar={handleOpenSearchBar} />
      ) : null}

      <Header handleOpenSearchBar={handleOpenSearchBar} />
      <Sidebar
        handleOpenNewChannel={handleOpenNewChannel}
        channels={channels}
        handleToggleRender={handleToggleRender}
      />
      <Outlet />

      {/* Modal for adding a new channel  */}
      {isNewChannelModalOpen && (
        <Modals
          title='AddChannelModal'
          modalTitle={`Create a channel`}
          modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
          handleClose={handleCloseNewChannel}
        >
          <NewChannel
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleNameInput={handleNameInput}
            handleDescriptionInput={handleDescriptionInput}
            name={name}
            description={description}
          />
        </Modals>
      )}
    </main>
  )
}

export default Home
