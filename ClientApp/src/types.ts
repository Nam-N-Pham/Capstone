export type RestaurantType = {
  id?: number
  name: string
  address: string
  phone: string
  website: string
  comments: string
}

export type APIError = {
  type: string
  title: string
  status: number
  traceID: string
  errors: Record<string, string[]>
}
