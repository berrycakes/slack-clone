import React from 'react'
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react'
import { getMessages, sendMessage } from '../api/api-message'
import { mockResponse, mockParams, mockHeaders } from '../api/mockData'
import Messages from '../components/Messages/Messages'

// mock api calls
jest.mock('../api/api-message')

describe('Test for displaying and sending messages', () => {
  test('GET request and display message', async () => {
    // arrange
    getMessages.mockImplementation(() => {
      return Promise.resolve(mockResponse)
    })

    // act
    await act(async () => {
      render(<Messages />)
    })
    const message = await waitFor(() =>
      screen.getByText('hello testing get message API request')
    )

    // assert
    expect(getMessages).toHaveBeenCalledTimes(1)
    expect(message).toBeInTheDocument()
  })

  test('POST request and send message', async () => {
    // arrange
    getMessages.mockImplementation(() => {
      return Promise.resolve(mockResponse)
    })
    sendMessage.mockImplementation(() => {
      return Promise.resolve()
    })

    // act
    await act(async () => {
      render(<Messages />)
    })
    const messageInput = await waitFor(() => screen.getByTitle('message-input'))
    const sendMessageButton = await waitFor(() =>
      screen.getByTitle('send-message-button')
    )
    const mockMessageBody = 'hello testing send message API request'
    await act(async () => {
      fireEvent.change(messageInput, {
        target: { value: mockMessageBody },
      })
    })
    await act(async () => {
      fireEvent.click(sendMessageButton)
    })

    // assert
    expect(sendMessage).toHaveBeenCalledTimes(1)
    expect(getMessages).toHaveBeenCalledTimes(2)
  })
})
