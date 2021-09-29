import React from 'react'

export function SignIn() {
  return (
    <>
      <h2>Sign In</h2>
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
      </p>
    </>
  )
}
