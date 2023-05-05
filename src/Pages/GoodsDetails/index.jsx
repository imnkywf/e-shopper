import React from 'react'
import { useParams } from 'react-router-dom'

export default function GoodsDetails() {
  const { id } = useParams()
  return (
    <div>
      <ul>
        <li>{id}</li>

      </ul>
    </div>
  )
}
