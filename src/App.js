/** @format */
import React, { useState } from 'react'
import Content from './component/Content/Content'
import Header from './component/Heder/Header'
import Basket from './component/basket/Basket'
import foto from './assets/Pizza/Pizza1.png'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import MyFollow from './pages/MyFollow'
import Orders from './pages/Orders'

export const AppContext = React.createContext({})

function App() {
  const [title, setTitle] = useState(1)
  const [openBasket, setOpenBasket] = useState(false)
  const [pizzaItem, setPizzaItem] = useState([])
  const [fevorite, setFevorite] = useState([])
  const [pizza, setPizza] = useState([])
  const [isReady, setIsReady] = useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartsResponse = await axios.get(
          'https://629de039c6ef9335c0a8e1d3.mockapi.io/cart'
        )

        const favoriteResponse = await axios.get(
          'https://629de039c6ef9335c0a8e1d3.mockapi.io/fevorites'
        )
        const itemsResponse = await axios.get(
          'https://629de039c6ef9335c0a8e1d3.mockapi.io/items'
        )

        setPizzaItem(cartsResponse.data)
        setFevorite(favoriteResponse.data)
        setPizza(itemsResponse.data)
        setIsReady(false)
      } catch (error) {
        alert('error')
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const onAddFavorite = async obj => {
    try {
      if (fevorite.find(e => e.id === obj.id)) {
        axios.delete(
          `https://629de039c6ef9335c0a8e1d3.mockapi.io/fevorites/${obj.id}`
        )
        setFevorite(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://629de039c6ef9335c0a8e1d3.mockapi.io/fevorites',
          obj
        )
        setFevorite(prev => [...prev, data])
      }
    } catch (error) {
      alert('Error')
    }
  }

  const onAddToCard = async obj => {
    if (pizzaItem.find(item => Number(item.id) === Number(obj.id))) {
      setPizzaItem(prev => prev.filter(el => Number(el.id) !== Number(obj.id)))

      axios.delete(`https://629de039c6ef9335c0a8e1d3.mockapi.io/cart/${obj.id}`)
    } else {
      const { data } = await axios.post(
        'https://629de039c6ef9335c0a8e1d3.mockapi.io/cart',
        obj
      )
      setPizzaItem(prev => [...pizzaItem, data])
    }
  }

  const addPizzaBasket = pizza => {
    setPizzaItem(prev => [...pizzaItem, pizza])
  }
  const removePizzaBasket = id => {
    axios.delete(`https://629de039c6ef9335c0a8e1d3.mockapi.io/cart/${id}`)
    //   .then(res => setPizzaItem(res.data))
    setPizzaItem(prev => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const isItemAdded = el => {
    console.log(pizzaItem, el)
    pizzaItem.forEach(el => console.log(el.pizza))

    return pizzaItem.some(obj => Number(obj.pizza.id) === Number(el.id))
  }

  return (
    <AppContext.Provider
      value={{
        isItemAdded,
        pizzaItem,
        setPizzaItem,
        fevorite,
        pizza,
        setOpenBasket,
      }}
    >
      <div className='App'>
        <div>
          <Basket
            items={pizzaItem}
            onClickBasket={() => setOpenBasket(!openBasket)}
            removePizzaBasket={removePizzaBasket}
            openBasket={openBasket}
          />
        </div>

        <Header onClickBasket={() => setOpenBasket(!openBasket)} />
        <Routes>
          <Route
            path='/'
            element={
              <Content
                onAddToCard={onAddToCard}
                addPizzaBasket={addPizzaBasket}
                onAddFavorite={obj => onAddFavorite(obj)}
                pizzaItem={pizzaItem}
                pizza={pizza}
                isReady={isReady}
                fevorite={fevorite}
              />
            }
          />
          <Route
            path='/favorite'
            element={
              <MyFollow items={fevorite} onAddFavorite={onAddFavorite} />
            }
          />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
