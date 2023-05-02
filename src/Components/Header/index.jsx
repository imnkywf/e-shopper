import React, { Fragment } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.css'
import Routes from '../Routes/index.js'
import logo from '../../Images/logo.png'

export default function Header() {
  const routes = useRoutes(Routes)
  return (
    <Fragment>
      <div className="topnav">
        <div className="wrapper">
          <ul className="navs">
            <li className='logo'><NavLink to='home'><img src={logo} alt="logo" /></NavLink></li>
            <li>
              <NavLink to='login'>Login <PersonIcon className='userIcon' /></NavLink>
            </li>

            <li>
              <NavLink to='cart'>Shopping Cart <ShoppingCartIcon className='cartIcon' /></NavLink>
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
