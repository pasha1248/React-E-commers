/** @format */

import React from 'react'
import { TbChecklist } from 'react-icons/tb'

const Info = ({ orderId }) => {
  return (
    <div className='info__info'>
      <TbChecklist className='info__img' />
      <h2>Perfectly</h2>

      <h4>Order shipped #{orderId}</h4>
    </div>
  )
}

export default Info
