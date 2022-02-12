import axios from 'axios'

const headers = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

const axiosFetch = headers
  ? axios.create({
      baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`,
      headers: {
        'access-token': headers['access-token'],
        client: headers['client'],
        expiry: headers['expiry'],
        uid: headers['uid'],
      },
    })
  : null

export const sendMessage = async ({ receiver_id, receiver_class, body }) => {
  try {
    const response = await axiosFetch.post('/api/v1/messages', {
      receiver_id,
      receiver_class,
      body,
    })
    // console.log(response)
    return response
  } catch (error) {
    return error
  }
}

export const getMessages = async ({ receiver_id, receiver_class }) => {
  try {
    const response = await axiosFetch.get('api/v1/messages', {
      params: { receiver_class, receiver_id },
    })
    return response
  } catch (error) {
    return error
  }
}
