export interface PartEntity {
  id: string
  name: string
  price: number
  partId: string
  categoryId: string
}

export type PartDto = Omit<PartEntity, 'id'>
