import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import Banner from './Banner'
import NewGoods from '../Products/NewGoods'

export default function Home() {

  return (
    <div className='home'>
      <div className="wrapper">
        <div className="banner">
          <Banner />
        </div>
        <div className="content">
          <NewGoods />
        </div>
        <Outlet />
      </div>
    </div >
  )
}
