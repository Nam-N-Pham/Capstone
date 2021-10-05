import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
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

  const history = useHistory()
  async function handleDelete(id: number | undefined) {
    const response = await fetch(`/api/Restaurants/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })

    if (response.ok) {
      return response.json()
    } else {
      return await response.json()
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

  const deleteRestaurant = useMutation(handleDelete, {
    onSuccess: function () {
      history.push('/')
    },
  })

  return (
    <>
      <h2>{restaurant.name}</h2>
      <button>Edit</button>
      <button
        onClick={(event) => {
          event.preventDefault()
          deleteRestaurant.mutate(restaurant.id)
        }}
      >
        Delete
      </button>
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
      <div>
        <button>
          <Link to={`/Add/${id}`}>Add</Link>
        </button>
      </div>
      <p>Comments:</p>
      <p>{restaurant.comments}</p>
    </>
  )
}
