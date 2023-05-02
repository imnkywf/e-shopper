import React, { Fragment } from 'react'
import './index.css'

export default function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <div className="wrapper">
          <div className="badges">
            <p className="price">价格亲民</p>
            <p className="express">物流快捷</p>
            <p className="quality">品质新鲜</p>
          </div>
          <div className="copyright">
            <p>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>About Us</a>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>Help Center</a>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>Our Services</a>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>Delievery</a>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>Business Corporation</a>
            </p>
            <p>CopyRight &copy; E-Shopper</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
