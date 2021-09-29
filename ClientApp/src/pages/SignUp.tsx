import React from 'react'

export function SignUp() {
  return (
    <>
      <h2>Sign up</h2>
      <form>
        <p>
          <label>E-mail address</label>
          <input type="text" name="e-mail"></input>
        </p>
        <p>
          <label>Password</label>
          <input type="text" name="password"></input>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}
