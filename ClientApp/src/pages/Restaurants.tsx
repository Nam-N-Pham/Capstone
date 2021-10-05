import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { RestaurantType } from '../types'

export function Restaurants() {
  const { data: restaurants = [] } = useQuery<RestaurantType[]>(
    'restaurants',
    async function () {
      const response = await fetch('/api/restaurants')

      return response.json()
    }
  )

  return (
    <>
      <section>MAP GOES HERE</section>
      <form>
        <input type="text" placeholder="" />
      </form>
      <ul>
        {restaurants.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <h2>
                <Link to={`/Restaurant/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </h2>
              <h3>{restaurant.address}</h3>
            </li>
          )
        })}
      </ul>
      <button>
        <Link to="/Add">Add Restaurant</Link>
      </button>
    </>
  )
}
