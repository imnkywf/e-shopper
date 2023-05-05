import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import NewGoods from './NewGoods'

const getProducts = async () => {
  const res = await axios.get('http://localhost:5000/api/getproducts')
  return res.data.products
}

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const news = await getProducts()
      setData(news)
    }
    fetchData()
  }, [])
  return (
    <div>
      <NewGoods />

      <div className="hot_goods">
        <div className="wrapper">
          <div className="panel_header">
            <h3>Hot Trends</h3>
          </div>
          <div className="panel_trends">
            <ul className="clearfix">
              {/* High img */}
              <li>
                <img src="https://img2.baidu.com/it/u=2871925845,87481425&fm=253&fmt=auto&app=138&f=JPG?w=500&h=1000" alt="" />
              </li>
              {/* small li */}
              {data.map(e =>
                <li key={e.id}>
                  <Link to={`/goods/${e.id}`} >
                    <div className="img-box">
                      <img src={e.img_url} alt={e.name} />
                    </div>
                    <div className="mask">
                      <div className="meta">
                        <p className="name">{e.name}</p>
                        <p className="flag">{e.flag}</p>
                        <p className="price"><small>$</small>{e.price}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div></div >
  )
}
