import React from 'react'
import './index.css'
import Banner from './Banner'

export default function Home() {
  return (
    <div className='home'>
      <div className="wrapper">
        <div className="banner">
          <Banner />
        </div>
      </div>
    </div>
  )
}
