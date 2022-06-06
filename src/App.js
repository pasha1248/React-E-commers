/** @format */
import React, { useState } from 'react'
import Content from './component/Content/Content'
import Header from './component/Heder/Header'
import Basket from './component/basket/Basket'
import foto from './assets/Pizza/Pizza1.png'

function App() {
  const [title, setTitle] = useState(1)
  const [openBasket, setOpenBasket] = useState(false)
  const [pizzaItem, setPizzaItem] = useState([])

  const onAddToCard = item => {
    setPizzaItem(prev => [...pizzaItem, item])
    console.log(item)
    console.log(pizzaItem)
  }

  return (
    <div className='App'>
      {openBasket ? (
        <Basket
          items={pizzaItem}
          onClickBasket={() => setOpenBasket(!openBasket)}
        />
      ) : (
        ''
      )}
      <Header onClickBasket={() => setOpenBasket(!openBasket)} />
      <Content onAddToCard={onAddToCard} />
    </div>
  )
}

export default App
