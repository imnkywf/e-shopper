import React, { Fragment, useRef, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const [agree, setAgree] = useState(false)

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const { data: { token, foundUser } } = await axios.get(`http://localhost:5000/api/getusers?username=${usernameRef.current.value}&password=${passwordRef.current.value}`)
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('user_name', foundUser.username)
        alert(`Welcome ${foundUser.username}`)
        navigate('/home')
      }
    } catch (error) {
      alert('user not found!')
    }
  }

  return (
    <Fragment>
      <div className="login-main">
        <div className="wrapper">
          <form action="">
            <div className="box">
              <div className="tab-nav">
                <h3>Login</h3>
              </div>
              <div className="tab-panel">
                <div className="input">
                  <input required type="text" placeholder="Username" name="username" ref={usernameRef} />
                </div>
                <div className="input">
                  <input required type="password" placeholder="Password" name="password" ref={passwordRef} />
                </div>
                <div className="agree">
                  <label htmlFor="my-checkbox">
                    <input type="checkbox" value="1" id="my-checkbox" className="remember" name="agree" checked={agree} onChange={handleAgreeChange} />
                  </label>
                  I Agreed <a href='#' className='terms'>Terms and Conditions</a >
                </div>
                <div className="button clearfix">
                  <button type="submit" className="login-btn" onClick={handleLogin} disabled={!agree}>Login In</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}
