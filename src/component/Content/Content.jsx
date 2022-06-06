/** @format */
import './Content.scss'
import 'macro-css'
import React from 'react'

import { FcSearch } from 'react-icons/fc'

import { useState } from 'react'
import axios from 'axios'
import PizzaCart from './PizzaCart/PizzaCart'

const Content = ({ onAddToCard }) => {
  const [pizza, setPizza] = useState([])

  React.useEffect(() => {
    axios
      .get('https://629de039c6ef9335c0a8e1d3.mockapi.io/items')
      .then(res => setPizza(res.data))
  }, [])

  const onAddTo = obj => {
    onAddToCard(obj)
  }

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
        {pizza.map((pizza, id) => {
          return <PizzaCart key={id} pizza={pizza} onAddTo={onAddTo} id={id} />
        })}
      </div>
    </div>
  )
}

export default Content
