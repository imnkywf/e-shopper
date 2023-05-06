import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../../APIs/ajaxRequest'
import './index.css'
import axios from 'axios'

export default function GoodsDetails() {
  const [data, setData] = useState([])
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  useEffect(() => {
    const getProducts = async () => {
      const p1 = await getData('http://localhost:5000/api/getnewgoods')
      const p2 = await getData('http://localhost:5000/api/getproducts')
      setData([...p1, ...p2])
    }
    getProducts()
  }, [])

  useEffect(() => {
    const foundProduct = data.find(e => e.id === +id)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [data, id])

  const handleChangeQuantity = (e) => {
    switch (e.target.className) {
      case 'plus-btn':
        setQuantity(quantity >= 99 ? (prevQty) => prevQty : (prevQty) => prevQty + 1)
        break
      case 'minus-btn':
        setQuantity(quantity <= 1 ? (prevQty) => prevQty : (prevQty) => prevQty - 1)
        break
      default:
        break
    }
  }

  const addToCart = () => {
    const username = localStorage.getItem('user_name')
    axios.post(`http://localhost:5000/api/addtoCart?username=${username}&id=${id}&good_name=${product.name}&quantity=${quantity}&price=${product.price}&img_url=${product.img_url}`)
  }

  return (
    <div className="product-details">
      <div className="wrapper">
        <div className="product-image">
          <img src={product.img_url} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <button className="minus-btn" onClick={handleChangeQuantity}>-</button>
            <input
              type="text"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleChangeQuantity}
            />
            <button className="plus-btn" onClick={handleChangeQuantity}>+</button>
          </div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
