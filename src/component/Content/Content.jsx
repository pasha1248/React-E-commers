/** @format */
import './Content.scss'
import 'macro-css'
import React from 'react'

import { FcSearch } from 'react-icons/fc'
import ContentLoader from 'react-content-loader'

import PizzaCart from './PizzaCart/PizzaCart'

const Content = ({
  pizza,
  onAddFavorite,
  onAddToCard,
  addPizzaBasket,
  pizzaItem,
  isReady,
  fevorite,
}) => {
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {}, [])

  const onAddTo = obj => {
    onAddToCard(obj)
  }

  return (
    <div className='content'>
      <div className='d-flex align-center justify-between'>
        <h2>Pizza for every taste</h2>
        <div className='content__search'>
          <FcSearch style={{ fontSize: '25px' }} />
          <input
            value={searchValue}
            onChange={e => {
              return setSearchValue(e.target.value)
            }}
            type='text'
            placeholder='Search...'
          />
        </div>
      </div>
      <div className='content__pizza'>
        {isReady
          ? [...Array(9)].map((el, id) => (
              <ContentLoader
                key={id}
                speed={1}
                width={260}
                height={350}
                viewBox='0 0 260 350'
                backgroundColor='#f3f3f3'
                foregroundColor='#ecebeb'
              >
                <circle cx='141' cy='125' r='119' />
                <rect x='33' y='247' rx='0' ry='0' width='220' height='25' />
                <rect x='34' y='284' rx='0' ry='0' width='218' height='22' />
              </ContentLoader>
            ))
          : pizza
              .filter(item =>
                item.pizza.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((piza, id) => {
                return (
                  <PizzaCart
                    key={id}
                    pizza={piza}
                    onAddTo={onAddTo}
                    id={id}
                    onAddFavorite={obj => onAddFavorite(obj)}
                    // added={pizzaItem.some(
                    // //   obj => Number(obj.id) === Number(piza.id)
                    // // )}
                    loading={isReady}
                    favorited={fevorite.some(
                      obj => Number(obj.id) === Number(piza.id)
                    )}
                  />
                )
              })}
      </div>
    </div>
  )
}

export default Content
