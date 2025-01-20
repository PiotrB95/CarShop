import { Box } from '@mui/material'
import { PartForm } from './PartForm.tsx'
import { useCreatePartMutation } from '../../queries/orders/useCreatePartMutation.ts'
import { useParams } from '@tanstack/react-router'
import CircularProgress from '@mui/material/CircularProgress'

export interface PartFormData {
  name: string,
  price: number,
  partId: string
  categoryId: string
}

export const AddPartForm = () => {
  const params = useParams({ from: '/categories/$categoryId' })

  const { mutate, isPending } = useCreatePartMutation();

  const onSubmit = (data: PartFormData) => {

    mutate({
      name: data.name,
      price: data.price,
      partId: data.partId,
      categoryId: params.categoryId,
    })
  }

  return (
    <Box>
      <PartForm onSubmit={onSubmit} />
      {isPending ? <CircularProgress /> : null}
    </Box>
  )
}
