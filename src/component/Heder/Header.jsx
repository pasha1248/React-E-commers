/** @format */

import React from 'react'
import Pizza from '../../assets/Pizza.png'
import './Header.scss'
import { CgProfile } from 'react-icons/cg'
import { IoIosBasket } from 'react-icons/io'
import { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = props => {
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
              <BsFillHeartFill className='header__icon' />
            </Link>
          </li>
          <li>
            <IoIosBasket className='header__icon' />
          </li>
          <li className='cu-p' onClick={props.onClickBasket}>
            1200$
          </li>
          <li>
            <CgProfile className='header__icon' />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
