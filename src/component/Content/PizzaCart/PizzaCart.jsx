/** @format */

import React, { useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import Pizza1 from '../../../assets/Pizza/Pizza1.png'

const PizzaCart = ({ pizza, id, onAddTo }) => {
  const [add, setAdd] = useState(true)
  const [heart, setHeard] = useState(true)

  const heartAdd = () => {
    setHeard(!heart)
  }

  const addBasket = obj => {
    setAdd(!add)
    onAddTo({ pizza })
    //  onAddToCard(obj)
  }

  return (
    <article className='pizza__item'>
      {heart ? (
        <AiOutlineHeart onClick={heartAdd} className='pizza__item-heard' />
      ) : (
        <AiOutlineHeart
          onClick={heartAdd}
          className='pizza__item-heard'
          style={{ color: 'red' }}
        />
      )}
      <img src={Pizza1} style={{ height: '15rem' }} alt='Pizza' />
      <h4>{pizza.name}</h4>
      <h4>Options</h4>
      <div className='pizza__btn'>
        <span>
          <span style={{ marginRight: '10px' }}>PRICE: </span>
          <b>{pizza.price}</b>
        </span>
        <div>
          {add ? (
            <BsPlusSquare
              onClick={obj => addBasket(obj)}
              className='pizza__icon'
            />
          ) : (
            <BsFillCheckSquareFill
              onClick={addBasket}
              className='pizza__icon'
              style={{ color: 'green' }}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default PizzaCart
