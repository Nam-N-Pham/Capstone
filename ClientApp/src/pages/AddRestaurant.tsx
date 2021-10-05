import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { APIError, RestaurantType } from '../types'

export function AddRestaurant() {
  const [errorMessage, setErrorMessage] = useState('')

  async function submitNewRestaurant(restaurantToCreate: RestaurantType) {
    const response = await fetch('/api/Restaurants', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(restaurantToCreate),
    })

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  const history = useHistory()
  const createNewRestaurant = useMutation(submitNewRestaurant, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(' '))
    },
  })

  const [newRestaurant, setNewRestaurant] = useState<RestaurantType>({
    name: '',
    address: '',
    phone: '',
    website: '',
    comments: '',
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedRestaurant = { ...newRestaurant, [fieldName]: value }

    setNewRestaurant(updatedRestaurant)
  }
  return (
    <>
      <h2>Add Restaurant</h2>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createNewRestaurant.mutate(newRestaurant)
        }}
      >
        <p>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newRestaurant.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={newRestaurant.address}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={newRestaurant.phone}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={newRestaurant.website}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <label>Comments</label>
          <input
            type="text"
            name="comments"
            value={newRestaurant.comments}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Add" />
        </p>
      </form>
    </>
  )
}
