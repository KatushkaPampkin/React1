import React, { useState } from 'react'
import './Block2.scss'
import house from '../../image/House.png'
import bath from '../../image/Bath.png'
import image from '../../image/block3hoese2.png'
import check from '../../image/ГалочкаАктивная.svg'
import checkNoActive from '../../image/ГалочкаНеАктивная.svg'
import InternaSlider from '../../image/InternaSlider.svg'
import hand from '../../image/Hand.svg'
import arrow from '../../image/Arrow.svg'
import flag from '../../image/Flag.svg'
import man from '../../image/мужик 1.png'
import lock from '../../image/Lock.svg'
import lock2 from '../../image/Group 11.svg'
import percent from '../../image/Percent.svg'
import { useSelector, useDispatch } from "react-redux";
import { decreaseCurrentCost, increaseCurrentCost, setCurrentStep, addChoice, removeChoice } from '../../MainPart/Block2/Calc/reducers/calculator'

const slide = [
    {
        title: 'Что будем строить?',
        image: [house, bath],
        leftCost: 100,
        rightCost: 3000,
    },
    {
        title: 'Второй слайд',
        image: [house, image],
        leftCost: 200,
        rightCost: 4000,
    },
    {
        title: 'Третий слайд',
        image: [image, bath],
        leftCost: 300,
        rightCost: 5000,
    },
    {
        title: 'Четвёртый слайд',
        image: [house, bath],
        leftCost: 400,
        rightCost: 6000,
    },
    {
        title: 'Пятый слайд',
        image: [bath, house],
        leftCost: 500,
        rightCost: 7000,
    },
]

const Block2 = () => {
    const currentStepFromStore = useSelector((state) => state.calculator.currentStep);
    const currentCostFromStore = useSelector((state) => state.calculator.currentCost);
    const currentChoicesFromStore = useSelector((state) => state.calculator.choices);
    const dispatch = useDispatch();

    const [index, setIndex] = useState(currentStepFromStore);
    const [choice, setChoice] = useState('not-selected');
    const [selected, setSelected] = useState(false);

    const plusSlide = () => {
        if (index !== slide.length - 1) {
            if (choice === 'left') {
                dispatch(increaseCurrentCost(slide[index].leftCost))
            } else if (choice === 'right') {
                dispatch(increaseCurrentCost(slide[index].rightCost))
            }

            setSelected(false);
            setChoice('not-selected');
            setIndex(index + 1)
            dispatch(setCurrentStep(index + 1))
        }
    }

    const minusSlide = () => {
        if (index > 0) {
            console.log(currentChoicesFromStore[index])
            if (choice === 'left') {
                dispatch(decreaseCurrentCost(slide[index].leftCost))
            } else if (choice === 'right') {
                dispatch(decreaseCurrentCost(slide[index].rightCost))
            }

            setSelected(false);
            setChoice('not-selected');
            setIndex(index - 1)
            dispatch(setCurrentStep(index - 1))
        }
    }

    const handleLeftChoiceClick = () => {
        setChoice('left');
        setSelected(true);
        dispatch(addChoice({ index: index, choice: 'left' }));
    }

    const handleRightChoiceClick = () => {
        setChoice('right');
        setSelected(true);
        dispatch(addChoice({ index: index, choice: 'right' }));
    }

    const indentation = Math.round(index / (slide.length - 0.4) * 100);
    // console.log(indentation)
    return (
        <section className='block2' >
            <div className="blockRow">
                <div className="blockRowItem">
                    <h2><span>Рассчитайте предварительную <br />
                        стоимость</span> дома за 1 минуту</h2>
                    <div className="slider">
                        <img style={{ left: `${indentation}%` }} className='clider__icon' src={InternaSlider} alt="" />
                    </div>
                    <div className="block2Title">
                        <div className='block2TitleNum' >0{index + 1}.</div>
                        <h3>{slide[index].title} - Стоимость: {currentCostFromStore} руб.</h3>
                    </div>
                    <div className="blockFlex">
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={slide[index].image[0]} alt="" />
                            <img
                                className='checkActive'
                                src={choice === 'left' ? check : checkNoActive}
                                alt=""
                                onClick={handleLeftChoiceClick}
                            />
                            <p>Дом</p>
                        </div>
                        <div className="blockFlexItem">
                            <img className="blockFlexItemImage" src={slide[index].image[1]} alt="" />
                            <img
                                className='checkActive'
                                src={choice === 'right' ? check : checkNoActive}
                                alt=""
                                onClick={handleRightChoiceClick}
                            />
                            <p>Баня</p>
                        </div>
                    </div>
                    <div className="blockFlex2">
                        <div>
                            <img src={hand} alt="" />
                            <p><span>Нажимайте на вариант ответа</span><br />
                                и переходите к следующему вопросу</p>
                        </div>
                        {index > 0 && <button onClick={minusSlide}>
                            <p>Назад</p>
                        </button>}
                        {index !== slide.length - 1 &&
                            <button onClick={plusSlide} disabled={!selected}>
                                <p>Далее</p>
                                <img src={arrow} alt="" />
                                <img src={arrow} alt="" />
                            </button>}
                    </div>
                </div>
                <div className="blockRowItem2">
                    <img className='blockRowItem2Flag' src={flag} alt="" />
                    <img className='blockRowItem2Man' src={man} alt="" />
                    <h2>Михаил Иванов</h2>
                    <h3>Ведущий архитектор</h3>
                    <p>Ответив на вопросы <span>вы получите:</span></p>
                    <div>
                        <img className='blockRowItem2Lock' src={lock} alt="" />
                        <p className='blockRowItem2Text' >Гарантированную <br /><span>скидку</span></p>
                        <img className='blockRowItem2Percent' src={percent} alt="" />
                    </div>
                    <div className="blockRowItem2Block">
                        <img className='blockRowItem2Lock2' src={lock2} alt="" />
                        <p>Ориентировочную<br />
                            <span>стоимость строительства</span></p>
                    </div>
                    <div className="blockRowItem2Block">

                        <img className='blockRowItem2Lock2' src={lock2} alt="" />
                        <p>Точную подборку<br />
                            <span>проектов исходя изваших
                                <br />ответов</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Block2