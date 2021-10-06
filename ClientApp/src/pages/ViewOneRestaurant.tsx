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
      <div className="view-one-rest-h2">
        <h2>{restaurant.name}</h2>
        <div className="view-one-rest-buttons">
          <button>
            <Link to={`/Restaurant/Edit/${id}`}>Edit</Link>
          </button>
          <button
            onClick={(event) => {
              event.preventDefault()
              deleteRestaurant.mutate(restaurant.id)
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="view-one-rest-body">
        <p className="view-one-rest-body-p">{restaurant.address}</p>
        <p className="view-one-rest-body-p">{restaurant.phone}</p>
        <p className="view-one-rest-body-p">{restaurant.website}</p>
        <p className="view-one-rest-body-p">Favorites</p>
        <ul className="view-one-rest-ul">
          {restaurant.favorites.map((favorite) => {
            return (
              <li
                key={favorite.name + favorite.price}
                className="view-one-rest-ul-li"
              >
                {favorite.name + ' - $' + favorite.price.toFixed(2)}
              </li>
            )
          })}
        </ul>
        <div className="view-one-rest-favorites-button">
          <button>
            <Link to={`/Add/${id}`}>Add</Link>
          </button>
        </div>
      </div>
      <div className="view-one-rest-comments">
        <p>Comments:</p>
        <p>{restaurant.comments}</p>
      </div>
    </>
  )
}
