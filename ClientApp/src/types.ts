export type RestaurantType = {
  id?: number
  name: string
  address: string
  phone: string
  website: string
  comments: string
  favorites: FavoriteType[]
}

export type APIError = {
  type: string
  title: string
  status: number
  traceID: string
  errors: Record<string, string[]>
}

export type FavoriteType = {
  name: string
  price: number
  restaurantId: number
}
