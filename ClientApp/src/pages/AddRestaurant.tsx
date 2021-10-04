import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { RestaurantType } from '../types'

export function AddRestaurant() {
  async function submitNewRestaurant(restaurantToCreate: RestaurantType) {
    const response = await fetch('/api/Restaurants', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(restaurantToCreate),
    })

    return response.json()
  }

  const history = useHistory()
  const createNewRestaurant = useMutation(submitNewRestaurant, {
    onSuccess: function () {
      history.push('/')
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
