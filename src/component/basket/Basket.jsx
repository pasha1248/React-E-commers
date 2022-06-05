/** @format */

import 'macro-css'
import React from 'react'
import './Basket.scss'
import Pizza1 from '../../assets/Pizza/Pizza1.png'
import { AiFillDelete } from 'react-icons/ai'
import GreenButton from '../../UI/GreenButton'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Basket = () => {
  return (
    <div className='overlay'>
      <div className='basket clear'>
        <h2 className='d-flex justify-between mb-10'>
          Basket <AiOutlineCloseSquare className='cu-p opacity-5' />
        </h2>
        <br />
        <div className='basket__items'>
          <div className='basket__item d-flex align-center justify-between mb-10'>
            <img className='mr-20' src={Pizza1} alt='Pizza' height='140px' />
            <div className='mr-20'>
              <p className='mb-5'>Paperoni</p>
              <b>20 $</b>
            </div>
            <AiFillDelete className='basket__btn' />
          </div>
          <div className='basket__item d-flex align-center justify-between mb-10'>
            <img className='mr-20' src={Pizza1} alt='Pizza' height='140px' />
            <div className='mr-20'>
              <p className='mb-5'>Paperoni</p>
              <b>20 $</b>
            </div>
            <AiFillDelete className='basket__btn' />
          </div>
        </div>
        <div className='total__btn mb-40 pb-40'>
          <ul className='basket__total-block'>
            <li>
              <span>Total:</span>
              <div></div>
              <b>40 $</b>
            </li>
            <li>
              <span>Cost:</span>
              <div></div>
              <b>40 $</b>
            </li>
          </ul>
          <GreenButton />
        </div>
      </div>
    </div>
  )
}

export default Basket
