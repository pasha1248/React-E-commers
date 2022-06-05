/** @format */
import './Content.scss'
import 'macro-css'
import React from 'react'
import Pizza1 from '../../assets/Pizza/Pizza1.png'
import { BsPlusSquare } from 'react-icons/bs'
import { BsFileMinus } from 'react-icons/bs'
import { FcSearch } from 'react-icons/fc'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'

const pizzaArray = [
  {
    photo: Pizza1,
    name: 'Paperoni',
    price: '20 $',
  },
  {
    photo: Pizza1,
    name: 'Paperoni',
    price: '20 $',
  },
  {
    photo: Pizza1,
    name: 'Paperoni',
    price: '20 $',
  },
  {
    photo: Pizza1,
    name: 'Paperoni',
    price: '20 $',
  },
]

const Content = () => {
  return (
    <div className='content'>
      <div className='d-flex align-center justify-between'>
        <h2>Pizza for every taste</h2>
        <div className='content__search'>
          <FcSearch style={{ fontSize: '25px' }} />
          <input type='text' placeholder='Search...' />
        </div>
      </div>

      <div className='content__pizza'>
        {pizzaArray.map((pizza, id) => {
          return (
            <article key={id} className='pizza__item'>
              <AiOutlineHeart className='pizza__item-heard' />
              <img src={pizza.photo} style={{ height: '15rem' }} alt='' />
              <h4>{pizza.name}</h4>
              <h4>Options</h4>
              <div className='pizza__btn'>
                <span>
                  <span style={{ marginRight: '10px' }}>PRICE: </span>
                  <b>{pizza.price}</b>
                </span>
                <div>
                  <BsPlusSquare className='pizza__icon' />
                  <BsFileMinus className='pizza__icon' />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Content
