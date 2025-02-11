import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useCreateCategoryMutation } from '../../queries/categories/useCreateCategoryMutation.ts'
import { CategoryForm } from './CategoryForm.tsx'

export interface CategoryFormData {
  name: string,
  identier: string,
  position: number,
}

export const AddCategoryForm = () => {

  const { mutate, isPending } = useCreateCategoryMutation();

  const onSubmit = (data: CategoryFormData) => {
    console.log('test')

    mutate({
      name: data.name,
      identier: data.identier.trim().toLowerCase(),
      position: data.position,
    })
  }

  return (
    <Box>
      <CategoryForm onSubmit={onSubmit} />
      {isPending ? <CircularProgress /> : null}
    </Box>
  )
}
