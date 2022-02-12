import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../api/api-users'
import './SearchBar.scss'
import avatar from '../../../avatar-placeholder.png'
import { NavLink, useParams } from 'react-router-dom'

const SearchBar = ({ className, searchNavLink }) => {
  const [userList, setUserList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const params = useParams()

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUserList(res['data']['data'])
        // console.log(res["data"]["data"]);
      })
      .catch((error) => error)
  }, [])

  return (
    // added classname props to change css when reused
    <div className={className}>
      <input
        type="text"
        placeholder="Search User"
        onChange={(event) => {
          setSearchInput(event.target.value)
        }}
      />

      {/* added a div wrapper */}
      {searchInput && searchInput.length > 0 ? (
        <div className="userlist">
          {userList
            .filter((user) => {
              if (searchInput == '') {
                return ''
              } else if (
                user.uid.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                // console.log(user);
                return user
              }
            })
            .map((user) => {
              const { id, email } = user
              return (
                // added search navlink props to change navlink address when REUSED
                <NavLink to={searchNavLink + `${id}`} key={id}>
                  <div className="filteredUsers">
                    <img src={avatar} />
                    <h3>{email}</h3>
                  </div>
                </NavLink>
              )
            })}
        </div>
      ) : null}
    </div>
  )
}

export default SearchBar
