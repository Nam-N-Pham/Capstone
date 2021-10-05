import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { RestaurantType } from '../types'

export function ViewOneRestaurant() {
  const { id } = useParams<{ id: string }>()

  async function fetchOneRestaurant(id: string) {
    const response = await fetch(`/api/Restaurants/${id}`)

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  const NullRestaurant: RestaurantType = {
    name: '',
    address: '',
    phone: '',
    website: '',
    comments: '',
    favorites: [],
  }

  const { data: restaurant = NullRestaurant } = useQuery<RestaurantType>(
    ['one-restaurant', id],
    () => fetchOneRestaurant(id)
  )

  return (
    <>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p>{restaurant.phone}</p>
      <p>{restaurant.website}</p>
      <p>Favorites</p>
      <ul>
        {restaurant.favorites.map((favorite) => {
          return (
            <li key={favorite.name + favorite.price}>
              {favorite.name + ' - $' + favorite.price.toFixed(2)}
            </li>
          )
        })}
      </ul>
      <p>Comments:</p>
      <p>{restaurant.comments}</p>
    </>
  )
}
