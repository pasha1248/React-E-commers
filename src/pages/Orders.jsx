/** @format */
import '../component/Content/Content.scss'

import axios from 'axios'
import React from 'react'
import PizzaCart from '../component/Content/PizzaCart/PizzaCart'

const Orders = () => {
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(
        'https://629de039c6ef9335c0a8e1d3.mockapi.io/orders'
      )
      console.log(data)
      console.log(
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      )
      console.log(setOrders(data.map((el, id) => el.items).flat()))
      console.log(
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      )
      console.log(orders)
    })()
  }, [])

  return (
    <div className='content'>
      <h2>My Orders</h2>
      <div className='content__pizza'>
        {orders.map((el, id) => (
          <PizzaCart key={id} pizza={el} id={id} />
        ))}
      </div>
    </div>
  )
}

export default Orders
