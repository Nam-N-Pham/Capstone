import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { RestaurantType } from '../types'

export function Restaurants() {
  const [filterText, setFilterText] = useState('')

  const { data: restaurants = [] } = useQuery<RestaurantType[]>(
    ['restaurants', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/restaurants'
          : `/api/restaurants?filter=${filterText}`
      )

      return response.json()
    }
  )

  return (
    <>
      {/* <section>MAP GOES HERE</section> */}
      <form className="search-bar">
        <input
          type="text"
          placeholder=""
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <h2 className="restaurant-list-h2">
                <Link
                  to={`/Restaurant/${restaurant.id}`}
                  className="restaurant-list-name"
                >
                  {restaurant.name}
                </Link>
              </h2>
              <ul className="restaurant-list-favorites-list">
                {restaurant.favorites.map((favorite) => {
                  return (
                    <li
                      key={favorite.name + favorite.price}
                      className="restaurant-list-favorites-list-li"
                    >
                      {favorite.name + ' - $' + favorite.price.toFixed(2)}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <div className="restaurants-add">
        <button>
          <Link to="/Add">Add Restaurant</Link>
        </button>
      </div>
    </>
  )
}
