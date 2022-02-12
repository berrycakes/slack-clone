import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../forms/Login/Login'
import App from '../App'
import Home from '../Home'

// mock routes
jest.mock('../forms/Login/Login')

describe('Component render on default route', () => {
  test('Render login on default route', () => {
    // arrange
    Login.mockImplementation(() => <div>Login Mock</div>)

    // act
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // assert
    expect(screen.getByText('Login Mock')).toBeInTheDocument()
  })
})
