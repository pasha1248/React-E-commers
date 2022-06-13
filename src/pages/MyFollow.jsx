/** @format */
import '../component/Content/Content.scss'
import 'macro-css'

import React from 'react'
import PizzaCart from '../component/Content/PizzaCart/PizzaCart'

const MyFollow = ({ items, onAddFavorite }) => {
  return (
    <div className='content'>
      <h1>My Follow</h1>
      <div className='content__pizza'>
        {items.map((pizza, id) => {
          return (
            <PizzaCart
              key={id}
              pizza={pizza}
              id={id}
              favorited={true}
              onAddFavorite={onAddFavorite}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MyFollow
