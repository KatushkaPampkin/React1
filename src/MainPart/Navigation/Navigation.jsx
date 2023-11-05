import React from 'react'
import './Navigation.scss'

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="Link">
          <Link to="/Block3">проекты</Link>

        </div>
        <div className="Link">
          <Link to="/Banner">главная</Link>
        </div>
        <div className="Link">
          <Link to="/SwiperSlider">акции</Link>
        </div>
        <div className="Link">
          <Link to="/Block2">калькулятор</Link>

        </div>
        <div className="Link">
          <a href="">заказчику</a>

        </div>
        <div className="Link">
          <a href="">контакты</a>

        </div>
        <div className="Link">

          <a href="">избранное</a>
        </div>
        <div className="Link">

          <a href="">поиск</a>
        </div>
      </nav>
  )
}

export default Navigation