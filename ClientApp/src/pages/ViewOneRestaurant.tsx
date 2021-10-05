import React from 'react'
import { useParams } from 'react-router'

export function ViewOneRestaurant() {
  const { id } = useParams<{ id: string }>()

  async function fetchOneRestaurant() {
    const response = await fetch('/api/Restaurants/{id}')

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  return (
    <>
      <h2>Casita</h2>
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
      </p>
    </>
  )
}
