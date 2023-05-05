import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import Banner from './Banner'
import axios from 'axios'

const getNewGoods = async () => {
  const res = await axios.get('http://localhost:5000/api/getnewgoods')
  return res.data.products
}

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const news = await getNewGoods()
      setData(news)
    }
    fetchData()
  }, [])

  return (
    <div className='home'>
      <div className="wrapper">
        <div className="banner">
          <Banner />
        </div>
        <div className="content">
          {/* <Link to='/products' exact>All Products</Link>
          <Link to='/goods/2' exact>P1</Link>*/}
          <div className="goods_new">
            <div className="wrapper">
              <div className="panel_header">
                <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3>
                <Link to='/products' className='more'>All Products
                  <i className="sprites"></i>
                </Link>
              </div>
              <div className="panel_goods">
                {data.map(e => <Link to={`/goods/${e.id}`} key={e.id} className='link'>
                  <img src={e.img_url} alt={e.name} />
                  <span className="name">{e.name}</span>
                  <span className="price"><small>$</small>{e.price}</span>
                </Link>)}
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div >
  )
}
