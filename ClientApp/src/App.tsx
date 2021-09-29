import React from 'react'
import { AddRestaurant } from './pages/AddRestaurant'
import { Restaurants } from './pages/Restaurants'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ViewOneRestaurant } from './pages/ViewOneRestaurant'

export function App() {
  return (
    <div>
      <header>
        <h1>Re-entrée</h1>
        <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>

      {/* <h2>Add Restaurant</h2>
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
      </form> */}
      <AddRestaurant />

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
