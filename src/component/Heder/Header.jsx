/** @format */

import React from 'react'
import Pizza from '../../assets/Pizza.png'
import './Header.scss'
import { CgProfile } from 'react-icons/cg'
import { IoIosBasket } from 'react-icons/io'
import { BsFillHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'

const Header = props => {
  const { pizzaItem } = React.useContext(AppContext)

  const totalPrice = pizzaItem.reduce(
    (sum, obj) => Number(obj.pizza.price) + sum,
    0
  )

  return (
    <header className='header__container clear'>
      <Link to='/'>
        <div className='header__left'>
          <img src={Pizza} alt='' style={{ height: '6rem' }} />
          <div className='header__menu'>
            <h2>React Pizza SHOP.</h2>
            <p>The Best Pizza </p>
          </div>
        </div>
      </Link>
      <div className='header__right'>
        <ul>
          <li>
            <Link to='/favorite'>
              <BsFillHeartFill className='header__icon heard' />
            </Link>
          </li>
          <li onClick={props.onClickBasket}>
            <IoIosBasket className='header__icon' />
          </li>
          <li className='cu-p' onClick={props.onClickBasket}>
            <strong style={{ fontSize: '25px' }}>$ {totalPrice}</strong>
          </li>
          <li>
            <Link to='/orders'>
              <CgProfile className='header__icon' />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
