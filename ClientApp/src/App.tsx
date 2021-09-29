import React from 'react'
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

      {/* <h2>Casita</h2>
      <p>1234 56th Avenue North</p>
      <p>(727)123-4567</p>
      <p>www.casita.com</p>
      <p>Favorites</p>
      <ul>
        <li>Antos - $7</li>
        <li>Tacos - $5</li>
        <li>Burritos - $9</li>
      </ul>
      <p>Comments:</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus
        rerum similique possimus iste repellendus numquam laboriosam
        necessitatibus atque dolore, amet rem esse alias? Quasi, porro sapiente.
        Officiis, dolorum enim?
      </p> */}
      <ViewOneRestaurant />

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
