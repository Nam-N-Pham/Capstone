import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { APIError, RestaurantType } from '../types'

export function EditRestaurant() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const [errorMessage, setErrorMessage] = useState('')

  async function fetchOneRestaurant(id: string) {
    const response = await fetch(`/api/Restaurants/${id}`)

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  useQuery<RestaurantType>(
    ['one-restaurant', id],
    () => fetchOneRestaurant(id),
    {
      onSuccess: function (restaurantBeingLoaded) {
        setUpdatingRestaurant(restaurantBeingLoaded)
      },
      // onError: function (apiError: APIError) {
      //   const newMessage = Object.values(apiError.errors).join(' ')
      //   setErrorMessage(newMessage)
      // },
    }
  )

  async function submitEditedRestaurant(updatedRestaurant: RestaurantType) {
    const response = await fetch(`/api/Restaurants/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedRestaurant),
    })

    if (response.ok) {
      return response.json()
    } else {
      return await response.json()
    }
  }

  const updateTheRestaurant = useMutation(submitEditedRestaurant, {
    onSuccess: function () {
      history.push('/')
    },
  })

  const [updatingRestaurant, setUpdatingRestaurant] = useState<RestaurantType>({
    name: '',
    address: '',
    phone: '',
    website: '',
    comments: '',
    favorites: [],
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedRestaurant = { ...updatingRestaurant, [fieldName]: value }

    setUpdatingRestaurant(updatedRestaurant)
  }
  return (
    <>
      <h2>Edit Restaurant</h2>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          updateTheRestaurant.mutate(updatingRestaurant)
        }}
      >
        <p>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updatingRestaurant.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={updatingRestaurant.address}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={updatingRestaurant.phone}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={updatingRestaurant.website}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={updatingRestaurant.comments}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Edit" />
        </p>
      </form>
    </>
  )
}
