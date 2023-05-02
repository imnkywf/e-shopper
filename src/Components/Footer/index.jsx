import React, { Fragment } from 'react'
import './index.css'

export default function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <div className="wrapper">
          <div className="badges">
            <p className="price">Quality</p>
            <p className="express">Effiency</p>
            <p className="quality">Fresh</p>
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
