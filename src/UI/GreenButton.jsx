/** @format */
import { AiOutlineArrowRight } from 'react-icons/ai'
import './GreenButton.scss'
import 'macro-css'
import React from 'react'

const GreenButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='green-button d-flex align-center justify-center'
    >
      <span>{text}</span> <AiOutlineArrowRight className='btn__arr' />
    </button>
  )
}

export default GreenButton
