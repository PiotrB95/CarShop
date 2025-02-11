import { Box, Button, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useNavigate, useParams } from '@tanstack/react-router'
import { useDeleteCategoryMutation } from '../../queries/categories/useDeleteCategoryMutation.ts'

interface Props {
  title: string,
  subtitle?: string,
  onClickHandler?: () => void,
}

export const CategoryHeader = ({ subtitle, title}: Props) => {
  const navigate = useNavigate()
  const { mutateAsync } = useDeleteCategoryMutation()
  const params = useParams({ from: '/categories/$categoryId' })

  const handleBack = async () => {
    await navigate({ to: '/categories' })
  }

  const handleDeleteCategory = async (categoryId: string) => {
    const deleteCategory =  await mutateAsync(categoryId)
    if(deleteCategory.id) {
      await navigate({ to: '/categories' })
    }
  }

  return (
    <Box style={{
      padding: '10px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }}>
      <div>
        <Typography variant="h4">{title}</Typography>
        <p>{subtitle}</p>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>
        <Button variant="contained" color="error" onClick={() => handleDeleteCategory(params.categoryId)}><Delete/></Button>
      </div>
    </Box>
  )
}