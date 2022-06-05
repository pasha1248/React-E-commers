/** @format */
import { AiOutlineArrowRight } from 'react-icons/ai'
import './GreenButton.scss'
import 'macro-css'
import React from 'react'

const GreenButton = () => {
  return (
    <button className='green-button d-flex align-center justify-center'>
      <span>Send order</span> <AiOutlineArrowRight className='btn__arr' />
    </button>
  )
}

export default GreenButton
