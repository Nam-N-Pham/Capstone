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
      history.push(`/Restaurant/${id}`)
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join(' ')
      setErrorMessage(newMessage)
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
      <div className="edit-restaurant-h2">
        <h2>Edit Restaurant</h2>
      </div>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          updateTheRestaurant.mutate(updatingRestaurant)
        }}
      >
        <p className="edit-restaurant-input">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updatingRestaurant.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="edit-restaurant-input">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={updatingRestaurant.address}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="edit-restaurant-input">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={updatingRestaurant.phone}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="edit-restaurant-input">
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={updatingRestaurant.website}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="edit-restaurant-input">
          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={updatingRestaurant.comments}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="edit-restaurant-submit">
          <input type="submit" value="Save" />
        </p>
      </form>
    </>
  )
}
