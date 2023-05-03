import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Products() {
  return (
    <div>
      <h1>All Products</h1>
      <Link to='/goods/123'>g1</Link>
      <Link to='/goods/12'>g2</Link>
      <Link to='/goods/323'>g3</Link>
    </div>
  )
}
