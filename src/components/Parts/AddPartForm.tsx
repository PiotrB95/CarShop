import { Box } from '@mui/material'
import { PartForm } from './PartForm.tsx'
import { useCreatePartMutation } from '../../queries/orders/useCreatePartMutation.ts'
import { useParams } from '@tanstack/react-router'
import CircularProgress from '@mui/material/CircularProgress'
import { PartDto } from '../../types/part.ts'

export const AddPartForm = () => {
  const params = useParams({ from: '/categories/$categoryId' })

  const { mutate, isPending } = useCreatePartMutation();

  const onSubmit = (data: PartDto) => {

    mutate({
      name: data.name,
      price: Number(data.price),
      partId: data.partId.trim().toString(),
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
