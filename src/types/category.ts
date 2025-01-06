export interface CategoryEntity {
  id: string
  name: string
  identier: string
  position: number
}

export type CategoryDto = Omit<CategoryEntity, 'id'>
