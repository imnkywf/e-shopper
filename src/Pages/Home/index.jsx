import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import Banner from './Banner'

export default function Home() {
  return (
    <div className='home'>
      <div className="wrapper">
        <div className="banner">
          <Banner />
        </div>
        <div className="content">
          <Link to='/products/2'>hahahahhaha</Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
