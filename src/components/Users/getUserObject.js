import { getAllUsers } from '../../api/api-users'

export const getUserObject = (uid) => {
  const user = getAllUsers()
    .then((res) => {
      const users = res['data']['data']
      const foundUser = users.find((user) => {
        return user.id === parseInt(uid)
      })
      return foundUser
    })
    .catch((error) => error)
  return user
}
