import { getAllUsers } from './api-users.js'

const users = () => {
  getAllUsers()
    .then((res) => {
      return res['data']['data']
      // console.log(res["data"]["data"]);
    })
    .catch((error) => error)
}

const usersArray = users()

export const getUserObject = (uid) => {
  return usersArray.find((user) => user.uid === parseInt(uid))
}
