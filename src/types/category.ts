import { PartEntity } from './part'

export interface CategoryEntity {
  id: string
  name: string
  identier: string
  position: number
}

export type CategoryDto = Omit<CategoryEntity, 'id'>

export interface CategoryWithPartsEntity {
  id: string
  name: string
  identier: string
  position: number
  parts: PartEntity[]
}
