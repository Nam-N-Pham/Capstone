import React from 'react'
import { Restaurants } from './pages/Restaurants'
import { SignUp } from './pages/SignUp'

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

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
