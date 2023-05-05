import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'
import Banner from './Banner'

export default function Home() {
  const data = [
    {
      name: "Apricot Jam",
      description: 'Apricot jam is a sweet and delicious fruit spread made from fresh apricots, sugar, and water. The apricots are cooked down until they are soft and the sugar is dissolved, resulting in a thick and syrupy mixture with chunks of fruit.',
      img_url: "https://www.capitalcuisine.co.uk/shop/wp-content/uploads/2021/04/ApricotGingerChutney_Jar_LR-306x306.jpg",
      price: 20,
      id: 1,
    },
    {
      name: "USA Frozen Fries",
      description: 'USA Frozen Fries are a classic American food staple that have become a popular menu item at fast-food restaurants and a must-have in many households. These frozen fries are made from high-quality potatoes that are carefully selected and cut to produce the perfect size and texture for frying. They are pre-cooked and frozen to preserve their flavor, texture, and nutrients, making them a convenient and easy-to-prepare side dish or snack.',
      img_url: "https://ekofood.com.tr/wp-content/uploads/2020/04/6798-1-306x306.jpg",
      price: 10,
      id: 2,
    },
    {
      name: "Zebra Sneaker",
      description: 'The USA zebra sneakers are made from high-quality materials that are designed to last, including a sturdy rubber sole and a soft and breathable fabric upper. They also feature a cushioned insole that provides excellent support and comfort, making them ideal for long walks or runs.',
      img_url: "https://img0.baidu.com/it/u=113188305,3423571500&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306",
      price: 95,
      id: 3,
    },
    {
      name: "Valentine's Candles",
      description: "Valentine's candles are the perfect way to set the mood for a romantic evening with your special someone. These candles are carefully crafted to create a warm, inviting ambiance that will help you and your loved one relax and enjoy each other's company.",
      img_url: "https://img0.baidu.com/it/u=1256750200,1060162502&fm=253&fmt=auto&app=138&f=JPEG?w=306&h=306",
      price: 15,
      id: 4,
    }
  ]
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
                <Link to='/products' className='more' exact>All Products
                  <i className="sprites"></i>
                </Link>
              </div>
              <div className="panel_goods">
                {/* <a href="javascript:;">
                  <img src="./uploads/new_goods_1.jpg" alt="" />
                  <span className="name">睿米无线吸尘器F8</span>
                  <span className="price"><small>￥</small>899</span>
                </a> */}
                {data.map(e => <Link to={`/goods/${e.id}`} exact key={e.id} className='link'>
                  <img src={e.img_url} alt={e.name} />
                  <span className="name">{e.name}</span>
                  <span className="price"><small>$</small>{e.price}</span>
                </Link>)}1
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div >
  )
}
