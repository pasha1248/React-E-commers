/** @format */

import React, { useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import ContentLoader from 'react-content-loader'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import Pizza1 from '../../../assets/Pizza/Pizza1.png'
import { AppContext } from '../../../App'

const PizzaCart = ({
  pizza,
  id,
  onAddTo,
  onAddFavorite,
  favorited = true,
  // added = false,
  loading = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext)
  // const [add, setAdd] = useState(isItemAdded)
  const [heart, setHeard] = useState(favorited)

  const heartAdd = obj => {
    setHeard(!heart)
    onAddFavorite(pizza)
  }

  const addBasket = obj => {
    // setAdd(!add)
    onAddTo(pizza)
    // onAddToCard(obj)
  }

  return (
    <>
      {loading ? (
        <ContentLoader
          speed={1}
          width={260}
          height={350}
          viewBox='0 0 260 350'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='141' cy='125' r='119' />
          <rect x='33' y='247' rx='0' ry='0' width='220' height='25' />
          <rect x='34' y='284' rx='0' ry='0' width='218' height='22' />
        </ContentLoader>
      ) : (
        <article className='pizza__item'>
          {heart ? (
            <AiOutlineHeart
              onClick={heartAdd}
              className='pizza__item-heard'
              style={{ color: 'red' }}
            />
          ) : (
            <AiOutlineHeart onClick={heartAdd} className='pizza__item-heard' />
          )}
          <img src={Pizza1} style={{ height: '15rem' }} alt='Pizza' />
          <h4>{pizza.pizza.name}</h4>
          <h4>Options</h4>
          <div className='pizza__btn'>
            <span>
              <span style={{ marginRight: '10px' }}>PRICE: </span>
              <b>
                <span>$</span>
                {pizza.pizza.price}
              </b>
            </span>
            <div>
              {isItemAdded(pizza.pizza) ? (
                <BsFillCheckSquareFill
                  onClick={addBasket}
                  className='pizza__icon'
                  style={{ color: 'green' }}
                />
              ) : (
                <BsPlusSquare
                  onClick={obj => addBasket(obj)}
                  className='pizza__icon'
                />
              )}
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default PizzaCart
