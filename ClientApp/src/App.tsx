import React from 'react'
import { Restaurants } from './pages/Restaurants'

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

      <Restaurants />

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
