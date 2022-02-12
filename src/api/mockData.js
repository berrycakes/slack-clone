export const mockResponse = {
  data: {
    data: [
      {
        id: 14630,
        body: 'hello testing get message API request',
        created_at: '2022-02-09T03:06:47.318Z',
        sender: {
          id: 1648,
          provider: 'email',
          uid: 'test@example.com',
          created_at: '2022-02-03T12:05:54.462Z',
          updated_at: '2022-02-09T03:12:29.091Z',
        },
        receiver: {
          id: 1635,
          provider: 'email',
          uid: 'testAPI@example.com',
          created_at: '2022-01-31T14:32:05.934Z',
          updated_at: '2022-02-09T03:17:18.226Z',
        },
      },
    ],
  },
}

export const mockParams = {
  receiver_class: 'User',
  receiver_id: 1648,
  body: 'hello testing send message API request',
}

export const mockHeaders = {
  'access-token': 'haXWCLr264GN4T2F5qSSug',
  client: '_690jUPp79Ik24mMmKlQJA',
  expiry: 1626789364,
  uid: 'testAPI@example.com',
}

export const mockLoginParams = {
  email: 'testAPI@example.com',
  password: '12345678',
  headers: mockHeaders,
}

export const mockLoginResponse = {
  data: {
    data: {
      id: 1635,
      email: 'testAPI@example.com',
      provider: 'email',
      uid: 'testAPI@example.com',
      allow_password_change: false,
      name: null,
      nickname: null,
      image: null,
    },
  },
}

export const mockRegisterParams = {
  email: 'testAPI@example.com',
  password: '12345678',
  password_confirmation: '12345678',
}

export const mockRegisterRejectParams = {
  email: 'wrongemail',
  password: 'correctpassword',
  password_confirmation: 'wrongpassword',
}

export const mockRegisterResponse = {
  response: {
    data: {
      status: 'error',
      data: {
        id: null,
        provider: 'email',
        uid: '',
        allow_password_change: false,
        name: null,
        nickname: null,
        image: null,
        email: 'wrongemail',
        created_at: null,
        updated_at: null,
      },
      errors: {
        password_confirmation: ["doesn't match Password"],
        email: ['is not an email'],
        full_messages: [
          "Password confirmation doesn't match Password",
          'Email is not an email',
        ],
      },
    },
  },
}

export const mockChannelErrors = null

export const mockChannelCreateResponse = {
  data: {
      data: {
          id: 2174,
          owner_id: 1645,
          name: "batch15-group3",
          created_at: "2022-02-03T14:39:04.774Z",
          updated_at: "2022-02-03T14:39:04.774Z"
      }
  }
}

export const mockChannelDetailsResponse = [
  {
      "id": 2174,
      "owner_id": 1645,
      "name": "batch15-group3",
      "created_at": "2022-02-03T14:39:04.774Z",
      "updated_at": "2022-02-03T14:39:04.774Z"
  },
  {
      "id": 2281,
      "owner_id": 1640,
      "name": "select-channel",
      "created_at": "2022-02-11T17:04:53.676Z",
      "updated_at": "2022-02-11T17:04:53.676Z"
  },
  {
      "id": 2282,
      "owner_id": 1640,
      "name": "12-mto",
      "created_at": "2022-02-11T17:05:08.713Z",
      "updated_at": "2022-02-11T17:05:08.713Z"
  }
]

export const mockAddMemberResponse = [
    {
        "id": 6120,
        "channel_id": 2282,
        "user_id": 1640,
        "created_at": "2022-02-11T17:05:08.719Z",
        "updated_at": "2022-02-11T17:05:08.719Z"
    },
    {
        "id": 6121,
        "channel_id": 2282,
        "user_id": 1645,
        "created_at": "2022-02-11T21:33:17.386Z",
        "updated_at": "2022-02-11T21:33:17.386Z"
    }
]
