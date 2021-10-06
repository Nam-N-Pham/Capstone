import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AddFavorite } from './pages/AddFavorite'
import { AddRestaurant } from './pages/AddRestaurant'
import { EditRestaurant } from './pages/EditRestaurant'
import { Restaurants } from './pages/Restaurants'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ViewOneRestaurant } from './pages/ViewOneRestaurant'

export function App() {
  return (
    <div>
      <header className="second-color">
        <h1>
          <Link to="/">Re-entrée</Link>
        </h1>
        {/* <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div> */}
      </header>

      <Switch>
        <Route exact path="/">
          <Restaurants />
        </Route>
        <Route exact path="/Restaurant/:id">
          <ViewOneRestaurant />
        </Route>
        <Route exact path="/Restaurant/Edit/:id">
          <EditRestaurant />
        </Route>
        <Route exact path="/Add">
          <AddRestaurant />
        </Route>
        <Route exact path="/Add/:id">
          <AddFavorite />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
      </Switch>

      <footer>
        <p>Re-entrée by Nam Pham</p>
      </footer>
    </div>
  )
}
