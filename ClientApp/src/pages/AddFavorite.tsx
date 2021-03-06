import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { FavoriteType } from '../types'

export function AddFavorite() {
  const { id } = useParams<{ id: string }>()

  async function submitNewFavorite(favoriteToCreate: FavoriteType) {
    const favoriteToCreateWithNumbers = {
      ...favoriteToCreate,
      price: Number(favoriteToCreate.price),
    }
    const response = await fetch('/api/Favorites', {
      method: 'POST',
      headers: { 'content-type': 'application/JSON' },
      body: JSON.stringify(favoriteToCreateWithNumbers),
    })

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  const history = useHistory()
  const createNewFavorite = useMutation(submitNewFavorite, {
    onSuccess: function () {
      history.push(`/Restaurant/${id}`)
    },
  })

  const [newFavorite, setNewFavorite] = useState<FavoriteType>({
    name: '',
    price: 0,
    restaurantId: Number(id),
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedRestaurant = { ...newFavorite, [fieldName]: value }

    setNewFavorite(updatedRestaurant)
  }

  return (
    <>
      <div className="add-favorite-h2">
        <h2>Add Favorite</h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createNewFavorite.mutate(newFavorite)
        }}
      >
        <p className="add-favorite-input">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newFavorite.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="add-favorite-input">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={newFavorite.price || ''}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="add-favorite-submit">
          <input type="submit" value="Add" />
        </p>
      </form>
    </>
  )
}
