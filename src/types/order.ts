export interface OrderEntity {
  id: string
  firstName: string
  lastName: string
  email: string
  value: number
  details: string
}

export type OrderDto = Omit<OrderEntity, 'id'>
