import { useState, useEffect } from 'react'
import { getAllUsers } from '../../api/api-users'
import avatar from '../../avatar-placeholder.png'
import { NavLink, useParams } from 'react-router-dom'

const SearchBar = ({ className, type }) => {
  const [userList, setUserList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  let { uid, id } = useParams();

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUserList(res['data']['data'])
        // console.log(res["data"]["data"]);
      })
      .catch((error) => error)
  }, [])

  useEffect(() => {
    setSearchInput('')
  }, [id])

  return (
    // added classname props to change css when reused
    <div className={className}>
      <input
        value={searchInput}
        type="text"
        placeholder={type === 'messages' ? 'Search User' : 'Add people'}
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
                type === 'messages' 
                ? <NavLink to={`/${uid}/new-message/${id}`} key={id}>
                  <div className="filteredUsers">
                    <img src={avatar} />
                    <h3>{email}</h3>
                  </div>
                </NavLink>
                : <div className="filteredUsers">
                  <img src={avatar} />
                  <h3>{email}</h3>
                </div>
              )
            })}
        </div>
      ) : null}
    </div>
  )
}

export default SearchBar
