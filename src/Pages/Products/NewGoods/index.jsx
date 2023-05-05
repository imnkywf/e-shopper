import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axios from 'axios'

const getNewGoods = async () => {
  const res = await axios.get('http://localhost:5000/api/getnewgoods')
  return res.data.products
}
export default function NewGoods() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const news = await getNewGoods()
      setData(news)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className="goods_new">
        <div className="wrapper">
          <div className="panel_header">
            <h3>New Products<small>Fresh Quality</small></h3>
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
  )
}
