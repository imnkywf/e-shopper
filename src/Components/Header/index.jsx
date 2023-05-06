import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.css'
import Routes from '../Routes/index.js'
import logo from '../../Images/logo.png'

export default function Header() {
  const routes = useRoutes(Routes)
  const [username, setusername] = useState('Login')
  const u_name = localStorage.getItem('user_name')

  useEffect(() => {
    if (u_name) {
      setusername(u_name)
    }
  }, [u_name])


  return (
    <Fragment>
      <div className="topnav">
        <div className="wrapper">
          <ul className="navs">
            <li className='logo'><NavLink to='home'><img src={logo} alt="logo" /></NavLink></li>
            <li>
              <NavLink to='home' className='link'>Home <HomeIcon className='homeIcon' /></NavLink>
            </li>
            <li>
              <NavLink to='login' className='link' >{username} <PersonIcon className='userIcon' /></NavLink>
            </li>
            <li>
              <NavLink to='cart' className='link' >Shopping Cart <ShoppingCartIcon className='cartIcon' /></NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {routes}
      </div>
    </Fragment>
  )
}
