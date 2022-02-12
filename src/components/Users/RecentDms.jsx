import { useState, useEffect } from 'react'
import { getInteractedUsers, getRecentDms } from '../../api/api-users'
import avatar from '../../avatar-placeholder.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const RecentDms = () => {
  const [recentDms, setRecentDms] = useState([])
  const params = useParams()
  const loginData = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

  useEffect(() => {
    // const headers = {
    //   token: loginData['access-token'],
    //   client: loginData.client,
    //   expiry: loginData.expiry,
    //   uid: loginData.uid,
    // }

    getRecentDms()
      .then((data) => setRecentDms(data.data.data))
      .catch((err) => console.log('Fetch Interacted Users Error: ', err))

    // console.log(loginData)
  }, [])

  console.log(recentDms)

  const userIds = recentDms.map((user) => user.id)
  // console.log(userIds)
  const filteredUsers = recentDms.filter(({ id }, index) => {
    return !userIds.includes(id, index + 1)
  })

  // console.log(filteredUsers);

  const renderUsersList = filteredUsers
    ? filteredUsers.map((user, index) => {
        const { email, id } = user
        return (
          <li
            className={params.id === user.id ? 'nav-select' : null}
            key={index}
          >
            <img src={avatar} />
            <div className="online-status-on"></div>
            <NavLink to={`/${params.uid}/messages/${id}`} key={index}>
              <span>{email}</span>
            </NavLink>
          </li>
        )
      })
    : null

  return <ul className="direct-messages">{renderUsersList}</ul>
}
export default RecentDms
