import React from 'react'
import { FiChevronDown, FiEdit } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'

const SidebarHeader = () => {
  // let navigate = useNavigate()
  let { uid } = useParams()
  return (
    <div className="sidebar-header">
      <button className="team-name-button">
        Avion School <FiChevronDown />
      </button>

      <Link to={`${uid}/new-message`}>
        <div className="compose-button">
          <FiEdit />
        </div>
      </Link>
    </div>
  )
}

export default SidebarHeader
