import React from 'react'
import './Navigation.scss'
import vector from '../../image/Union.svg'
import heart from '../../image/logo.svg'
import search from '../../image/Union.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="Link">
          <Link to="/Block3">проекты</Link>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <Link to="/Banner">главная</Link>
        </div>
        <div className="Link">
          <Link to="/SwiperSlider">акции</Link>
        </div>
        <div className="Link">
          <Link to="/Block2">калькулятор</Link>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <a href="">заказчику</a>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <a href="">контакты</a>
          <img className='LinkImage' src={vector} alt="" />
        </div>
        <div className="Link">
          <img src={heart} className='ImageIcon' alt="" />
          <a href="">избранное</a>
        </div>
        <div className="Link">
          <img className='ImageIcon' src={search} alt="" />
          <a href="">поиск</a>
        </div>
      </nav>
  )
}

export default Navigation