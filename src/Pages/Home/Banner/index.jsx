import React, { Fragment } from 'react'
// Import Swiper React components
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './index.css'

import banner1 from '../../../Images/banner1.jpg'
import banner2 from '../../../Images/banner2.jpg'
import banner3 from '../../../Images/banner3.jpg'
import banner4 from '../../../Images/banner4.jpg'
import banner5 from '../../../Images/banner5.jpg'

export default function Banner() {
  return (
    <Fragment>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { }}
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
      </Swiper>
    </Fragment>
  )
}
