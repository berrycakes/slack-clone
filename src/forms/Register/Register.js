import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userRegistration } from './../../api/api-auth'
import RegHeader from './RegComponents/RegHeader'
import RegFooter from './RegComponents/RegFooter'
import Errors from '../../components/Errors/Errors'

function Register() {
  // Set input & error message states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPwConfirmation] = useState('')
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  // Declare variable for useNavigate
  let navigate = useNavigate()

  // Reset function
  const reset = () => {
    setEmail('')
    setPassword('')
    setPwConfirmation('')
  }

  // Create user account upon registration
  const createUser = (e) => {
    e.preventDefault()

    // Create object with new user details
    const userDetails = { email, password, password_confirmation }

    // Invoke API function for user registration
    userRegistration(userDetails)
      .then((response) => {
        if (response.status === 200) {
          setHasError(false)
          setDisplaySuccessMessage(true)
          setTimeout(() => {
            navigate('/')
          }, 1000)
          reset()
        } else {
          setDisplaySuccessMessage(false)
          setHasError(true)
          setErrorMessage(response.response.data.errors['full_messages'])
        }
      })
      .catch((error) => {
        setDisplaySuccessMessage(false)
        setHasError(true)
      })
  }

  // Event handlers
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePwInput = (e) => {
    setPassword(e.target.value)
  }

  const handlePwConfirmation = (e) => {
    setPwConfirmation(e.target.value)
  }

  const handleSubmit = (e) => {
    createUser(e)
  }

  const handleClickSubmit = (e) => {
    createUser(e)
  }

  return (
    <div className="auth">
      <RegHeader />
      {hasError && (
        <Errors title="Check your email address.">
          Review the information you have submitted and try again.
        </Errors>
      )}
      <div>
        <form className="reg-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="input-auth"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="name@work-email.com"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              required
            ></input>
          </div>
          <div>
            <input
              className="input-auth"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePwInput}
              placeholder="Enter your password here."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
            ></input>
          </div>
          <div>
            <input
              className="input-auth"
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              value={password_confirmation}
              onChange={handlePwConfirmation}
              placeholder="Confirm your password here."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
            ></input>
          </div>
          {hasError
            ? errorMessage.map((error, index) => (
                <Errors key={index} title="warning-red">
                  {error}
                </Errors>
              ))
            : null}
          {displaySuccessMessage ? (
            <div className="success-message">
              Successfully created account. Redirecting to login...
            </div>
          ) : null}
          <div>
            <button className="auth-button" onClick={handleClickSubmit}>
              Create an Account
            </button>
          </div>
          <div className="reg-checkbox">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              value="subscribe"
            ></input>
            <span className="label-regcheckbox">
              It's okay to send me emails about Slack.
            </span>
          </div>
          <div className="reg-terms">
            By continuing, you're agreeing to our{' '}
            <a href="https://slack.com/terms-of-service">
              Customer Terms of Service
            </a>
            , <a href="https://slack.com/privacy-policy">Privacy Policy</a>, and{' '}
            <a href="https://slack.com/cookie-policy">Cookie Policy</a>.
          </div>
        </form>
      </div>
      <RegFooter />
    </div>
  )
}

export default Register
