import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react'
import { userLogin, userRegistration } from '../api/api-auth'
import {
  mockResponse,
  mockParams,
  mockLoginParams,
  mockRegisterParams,
  mockHeaders,
  mockLoginResponse,
  mockRegisterResponse,
} from '../api/mockData'
import Login from '../forms/Login/Login'
import Register from '../forms/Register/Register'

// mock api calls
jest.mock('../api/api-auth')

describe('Test for logging in user', () => {
  test('Successful POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.resolve(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
  })

  test('Rejected POST request to login user', async () => {
    // arrange
    userLogin.mockImplementation((mockLoginParams) => {
      return Promise.reject(mockLoginResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      )
    })
    const loginButton = await waitFor(() => screen.getByText('Sign In'))
    await act(async () => {
      fireEvent.click(loginButton)
    })
    const errorMessage = await waitFor(() =>
      screen.getByText(
        'Review the information you have submitted and try again.'
      )
    )

    // assert
    expect(userLogin).toHaveBeenCalledTimes(1)
    expect(errorMessage).toBeInTheDocument()
  })
})
// TODO: register test
describe('Test for registering user', () => {
  test('Successful POST request to register user', async () => {
    // arrange
    userRegistration.mockImplementation((mockRegisterParams) => {
      return Promise.resolve(mockRegisterResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      )
    })
    const registerButton = await waitFor(() =>
      screen.getByText('Create an Account')
    )
    await act(async () => {
      fireEvent.click(registerButton)
    })

    // assert
    expect(userRegistration).toHaveBeenCalledTimes(1)
  })

  test('Resolve POST request to return error', async () => {
    // arrange
    userRegistration.mockImplementation((mockRegisterRejectParams) => {
      return Promise.resolve(mockRegisterResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      )
    })
    const registerButton = await waitFor(() =>
      screen.getByText('Create an Account')
    )
    await act(async () => {
      fireEvent.click(registerButton)
    })
    const errorMessagePassword = await waitFor(() =>
      screen.getByText(`Password confirmation doesn't match Password`)
    )
    const errorMessageEmail = await waitFor(() =>
      screen.getByText('Email is not an email')
    )

    // assert
    expect(userRegistration).toHaveBeenCalledTimes(1)
    expect(errorMessagePassword).toBeInTheDocument()
    expect(errorMessageEmail).toBeInTheDocument()
  })

  test('Reject POST request to return error', async () => {
    // arrange
    userRegistration.mockImplementation((mockRegisterRejectParams) => {
      return Promise.reject(mockRegisterResponse)
    })

    // act
    await act(async () => {
      render(
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      )
    })
    const registerButton = await waitFor(() =>
      screen.getByText('Create an Account')
    )
    await act(async () => {
      fireEvent.click(registerButton)
    })
    const errorMessageReject = await waitFor(() =>
      screen.getByText(
        `Review the information you have submitted and try again.`
      )
    )

    // assert
    expect(userRegistration).toHaveBeenCalledTimes(1)
    expect(errorMessageReject).toBeInTheDocument()
  })
})
