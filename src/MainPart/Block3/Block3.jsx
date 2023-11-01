import React from 'react'
import './Block3.scss'
import imageBig from '../../image/block3house1.png'
import image from '../../image/block3hoese2.png'


const Block3 = () => {
    return (
        <section className='Block3' >
            <h2 className="gellery__title"><span>Мы строим деревянные дома и бани</span> с учетом
                всех особенностей Курска</h2>
            <div className="Block3__items">
                <div className="Block3__item Block3__item-big1">
                    <img className='Block3__item-image' src={imageBig} alt="" />
                    <h3 className="Block3__item-title Block3__item-title-big">Каркасные<br/>
                        дома</h3>
                    <p className="Block3__item-text Block3__item-text-big" >от <span>21&nbsp;800</span> руб/м</p>
                    <button className="Block3__item-btn Block3__item-btn-big">смотреть проекты</button>
                    <div className="projects projects-big">100+ проектов</div>
                </div>
                <div className="Block3__item">
                    <img className='Block3__item-image' src={image} alt="" />
                    <h3 className="Block3__item-title">Дома<br/> из бруса</h3>
                    <p className="Block3__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="Block3__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="Block3__item">
                    <img className='Block3__item-image' src={image} alt="" />
                    <h3 className="Block3__item-title">Срубы под<br/> усадку</h3>
                    <p className="Block3__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="Block3__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="Block3__item">
                    <img className='Block3__item-image' src={image} alt="" />
                    <h3 className="Block3__item-title">Бани<br/> из бруса</h3>
                    <p className="Block3__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="Block3__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="Block3__item">
                    <img className='Block3__item-image' src={image} alt="" />
                    <h3 className="Block3__item-title">Перевозные<br/> бани</h3>
                    <p className="Block3__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="Block3__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                <div className="Block3__item Block3__item-big2">
                    <img className='Block3__item-image' src={imageBig} alt="" />
                    <h3 className="Block3__item-title Block3__item-title-big">Каркасные<br/> бани</h3>
                    <p className="Block3__item-text Block3__item-text-big" >от <span>21&nbsp;800</span> руб/м</p>
                    <button className="Block3__item-btn Block3__item-btn-big">смотреть проекты</button>
                    <div className="projects projects-big">100+ проектов</div>
                </div>
                <div className="Block3__item">
                    <img className='Block3__item-image' src={image} alt="" />
                    <h3 className="Block3__item-title">Срубы<br/> под усадку</h3>
                    <p className="Block3__item-text" >от <span>19&nbsp;700</span> руб/м</p>
                    <button className="Block3__item-btn">смотреть проекты</button>
                    <div className="projects">100+ проектов</div>
                </div>
                
            </div>
        </section>
    )
}

export default Block3