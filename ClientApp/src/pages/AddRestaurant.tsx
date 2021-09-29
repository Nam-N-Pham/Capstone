import React from 'react'

export function AddRestaurant() {
  return (
    <>
      <h2>Add Restaurant</h2>
      <form>
        <p>
          <label>Name</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label>Address</label>
          <input type="text" name="address" />
        </p>
        <p>
          <label>Phone</label>
          <input type="text" name="phone" />
        </p>
        <p>
          <label>Comments</label>
          <input type="text" name="comment" />
        </p>
        <p>
          <input type="submit" value="Add" />
        </p>
      </form>
    </>
  )
}
