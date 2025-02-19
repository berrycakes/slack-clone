import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './forms/Register/Register'
import Login from './forms/Login/Login'
import DefaultErrorPage from './components/Errors/DefaultErrorPage'
import Home from './Home'
import Messages from './components/Messages/Messages'
import CreateNewMessage from './components/Messages/CreateNewMessage'
import Channel from './components/Channel/Channel'

function App() {
  // Set states for authentication and login responses
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState('')
  const [userHeaders, setUserHeaders] = useState('')

  // Function to set user & header data to child components
  const handleUserData = (data) => {
    console.log(data)
    setUserData(data)
  }

  const handleUserHeaders = (data) => {
    console.log(data)
    setUserHeaders(data)
  }

  // Updated to include dependency on authenticated, userData, userHeaders
  useEffect(() => {
    let headers = sessionStorage.getItem('userLoggedInDetails')
    headers && JSON.parse(headers)
      ? setAuthenticated(true)
      : setAuthenticated(false)
  }, [authenticated, userData, userHeaders])

  return (
    <Routes>
      {!authenticated && (
        <>
          <Route
            path="slack-clone/login"
            element={
              <Login
                authenticate={() => setAuthenticated(true)}
                handleUserData={handleUserData}
                handleUserHeaders={handleUserHeaders}
              />
            }
          />
          <Route
            path="slack-clone/"
            element={
              <Login
                authenticate={() => setAuthenticated(true)}
                handleUserData={handleUserData}
                handleUserHeaders={handleUserHeaders}
              />
            }
          />
          <Route path="slack-clone/register" element={<Register />} />
        </>
      )}

      {authenticated && (
        <>
          <Route path="/slack-clone/" element={<Home />}>
            <Route path="/slack-clone/:uid/" element={<CreateNewMessage />} />
            <Route
              path="/slack-clone/:uid/new-message/"
              element={<CreateNewMessage />}
            />
            <Route
              path="/slack-clone/:uid/new-message/:id"
              element={<CreateNewMessage />}
            />
            <Route
              path="/slack-clone/:uid/messages/:id"
              element={<Messages />}
            />
            <Route
              path="/slack-clone/:uid/channels/:channelId"
              element={<Channel />}
            />
            <Route
              path="/slack-clone/:uid/channels/:id"
              element={<Channel />}
            />
          </Route>
        </>
      )}
      <Route
        path="/slack-clone/login"
        element={
          <Login
            authenticate={() => setAuthenticated(false)}
            handleUserData={handleUserData}
            handleUserHeaders={handleUserHeaders}
          />
        }
      />
      <Route path="/404" element={<DefaultErrorPage />} />
      <Route path="*" element={<DefaultErrorPage />} />
    </Routes>
  )
}

export default App
