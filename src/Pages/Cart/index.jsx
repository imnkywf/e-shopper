import React, { Fragment, useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

const url = 'http://localhost:5000/api/getuserscart?username=nf140901'

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const getCart = async () => {
      const username = localStorage.getItem('user_name')
      const { data } = await axios.get(`http://localhost:5000/api/getuserscart?username=${username}`)
      setCartItems(data.cart)
    }

    getCart()
  }, [])


  return (
    <Fragment>
      <h1>Your Shopping Cart</h1>
      <ul>
        {
          cartItems.map(e => <li key={e.good_name}>{e.good_name},,,,{e.quantity}</li>)
        }


      </ul>
    </Fragment>
  )
}
