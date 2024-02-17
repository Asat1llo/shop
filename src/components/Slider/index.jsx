import classes from './slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {abrand, sbrand, xbrand} from './../../assets/assets.jsx'



export function Slider() {
  return (
    <div className="container">

    <Swiper
    centeredSlides={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    
    modules={[Autoplay]}
    className={classes.mySwiper}
    >
    <SwiperSlide><img src={sbrand} alt="samsung" className={classes.sliderImg}/></SwiperSlide>
    <SwiperSlide><img src={abrand} alt="apple" className={classes.sliderImg}/></SwiperSlide>
    <SwiperSlide><img src={xbrand} alt="samsung" className={classes.sliderImg} /></SwiperSlide>
  </Swiper>
   </div>
  )
}
