import React from 'react'
import { Restaurants } from './pages/Restaurants'
import { SignIn } from './pages/SignIn'
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

      {/* <h2>Sign In</h2>
      <form></form>
      <p>
        <label>E-mail</label>
        <input type="text" name="e-mail" />
      </p>
      <p>
        <label>Password</label>
        <input type="text" name="password" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p> */}
      <SignIn />

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
