/** @format */

import 'macro-css'
import React, { useContext } from 'react'
import './Basket.scss'
import Pizza1 from '../../assets/Pizza/Pizza1.png'
import { AiFillDelete } from 'react-icons/ai'
import GreenButton from '../../UI/GreenButton'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GiCardboardBox } from 'react-icons/gi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AppContext } from '../../App'
import { useState } from 'react'
import Info from './Info'
import axios from 'axios'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const Basket = ({
  onClickBasket,
  items = [],
  removePizzaBasket,
  openBasket,
}) => {
  const [orderComplete, setOrderComplete] = useState(false)
  const { pizzaItem, setPizzaItem } = useContext(AppContext)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        `https://629de039c6ef9335c0a8e1d3.mockapi.io/orders`,
        {
          items: pizzaItem,
        }
      )
      setOrderId(data.id)
      setOrderComplete(true)
      setPizzaItem([])

      for (let i = 0; i < pizzaItem.length; i++) {
        const item = pizzaItem[i]
        await axios.delete(
          'https://629de039c6ef9335c0a8e1d3.mockapi.io/cart/' + item.id
        )
        await delay(1000)
      }
    } catch (error) {
      alert('error :(')
    }
  }
  const totalPrice = pizzaItem.reduce(
    (sum, obj) => Number(obj.pizza.price) + sum,
    0
  )

  return (
    <div className={`overlay ${openBasket ? 'overlayVisible' : ''}`}>
      <div className='basket clear'>
        <h2 className='d-flex justify-between mb-10'>
          Basket
          <AiOutlineCloseSquare
            onClick={onClickBasket}
            className='cu-p opacity-5'
          />
        </h2>
        <br />
        {items.length === 0 ? (
          orderComplete ? (
            <Info orderId={orderId} />
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '6rem',
              }}
            >
              <GiCardboardBox
                style={{
                  fontSize: '140px',
                  color: 'green',
                }}
              />
              <h2 className='text-center'>The basket is empty</h2>
              <p>Added pizza</p>
              <button
                onClick={onClickBasket}
                className='green-button d-flex align-center justify-center'
              >
                <span>Go Back</span>{' '}
                <AiOutlineArrowRight className='btn__arr' />
              </button>
            </div>
          )
        ) : (
          <>
            <div className='basket__items'>
              {items.map(obj => {
                return (
                  <div
                    key={obj.id}
                    className='basket__item d-flex align-center justify-between mb-10'
                  >
                    <img
                      className='mr-20'
                      src={Pizza1}
                      alt='Pizza'
                      height='140px'
                    />
                    <div className='mr-20'>
                      <p className='mb-5'>{obj.pizza.name}</p>
                      <b>{obj.pizza.price}</b>
                    </div>
                    <AiFillDelete
                      className='basket__btn'
                      onClick={() => removePizzaBasket(obj.id)}
                    />
                  </div>
                )
              })}
            </div>
            <div className='total__btn mb-40 pb-40'>
              <ul className='basket__total-block'>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b style={{ fontSize: '25px' }}>{totalPrice}$</b>
                </li>
                {/* <li>
                  <span>Cost:</span>
                  <div></div>
                  <b></b>
                </li> */}
              </ul>
              <GreenButton onClick={onClickOrder} text={'Send Pizza'} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Basket
