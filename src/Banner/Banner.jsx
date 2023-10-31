import React from 'react'
import img from '../image/Union.svg'
import Paintbrush from '../image/Paintbrush.svg'
import CheckMark from '../image/CheckMark.svg'
import Paper from '../image/Paper.svg'
import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">

          <h1 className='bannerTitle'><span>Строительство<br/>
            деревянных домов<br/></span>
            под ключ в Курске</h1>
          <h2>Построим теплый и надежный дом <br/>
            <span> с гарантией 10 лет</span></h2>
          <button>рассчитать стоимость</button>
          <div className="bannerRow">
            <div className="bannerRowItem">
              <img src={img} alt="" />
              <p>40 собственных<br/>
                опытных бригад</p>
            </div>
            <div className="bannerRowItem">
              <img src={Paintbrush} alt="" />
              <p>Свое производство<br/>
                строительных материалов</p>
            </div>
            <div className="bannerRowItem">
              <img src={CheckMark} alt="" />
              <p>Тысячи довольных<br/>
                клиентов с 1998 года</p>
            </div>
            <div className="bannerRowItem">
              <img src={Paper} alt="" />
              <p>Гарантия на все строительные<br/>
                работы по договору</p>
            </div>
          </div>
    </section>
  )
}

export default Banner
