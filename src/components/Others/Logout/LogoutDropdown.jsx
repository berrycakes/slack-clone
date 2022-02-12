import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LogoutDropdown({ handleClose }) {
  let navigate = useNavigate()
  const signout = () => {
    sessionStorage.clear()
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="logout-avatar-dropdown">
        <ul>
          <li>Profile</li>
          <li>Preferences</li>
          <hr></hr>
          <li onClick={signout}>
            <Link to="/logout/login">Sign out of Group 3</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LogoutDropdown
