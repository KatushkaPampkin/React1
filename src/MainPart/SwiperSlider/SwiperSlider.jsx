
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../image/image 6.png'
import image2 from '../../image/image 7.png'
import discount from '../../image/Discount.svg'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../SwiperSlider/SwiperSlider.css';


import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
      <section className='slider'>
        <h2 className="slider__title"><span>Акции и подарки</span> для каждой семьи</h2>
        <div className="slider__items">

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image} alt="" />
                <h3 className='slider__item-title' >Любая перепланировка <br />в подарок!</h3>
                <p className='slider__item-text' > Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image2} alt="" />
                <h3 className='slider__item-title' >Металлическая <br />дверь в подарок!</h3>
                <p className='slider__item-text'> Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
                <img className='slider__item-discount' src={discount} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image} alt="" />
                <h3 className='slider__item-title' >Любая перепланировка <br />в подарок!</h3>
                <p className='slider__item-text' > Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image2} alt="" />
                <h3 className='slider__item-title' >Металлическая <br />дверь в подарок!</h3>
                <p className='slider__item-text'> Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
                <img className='slider__item-discount' src={discount} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image} alt="" />
                <h3 className='slider__item-title' >Любая перепланировка <br />в подарок!</h3>
                <p className='slider__item-text' > Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider__item">
                <img className='slider__item-image' src={image2} alt="" />
                <h3 className='slider__item-title' >Металлическая <br />дверь в подарок!</h3>
                <p className='slider__item-text'> Здесь есть текст<br />
                  Очень интересный<br />
                  Очень нужный<br />
                  Тееееееекст</p>
                <button>перейти к акции</button>
                <img className='slider__item-discount' src={discount} alt="" />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

      </section>
    </>
  );
}