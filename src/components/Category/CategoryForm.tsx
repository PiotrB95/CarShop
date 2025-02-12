import { Box, Button, styled, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CategoryFormData } from './AddCategoryForm.tsx'

interface Props {
  onSubmit: SubmitHandler<CategoryFormData>
}

const StyledTextField = styled(TextField)({
  margin: '10px',
})

export const CategoryForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>()

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
        width: '100%',
      }}
    >
      <StyledTextField
        type="text"
        placeholder="Nazwa"
        {...register('name', { required: true, minLength: 3 })}
        error={!!errors.name}
      />
      <StyledTextField
        type="text"
        placeholder="URL"
        {...register('identier', { required: true, minLength: 3 })}
        error={!!errors.identier}
      />
      <StyledTextField
        type="number"
        placeholder="Pozycja"
        {...register('position', {
          required: true,
          minLength: 0,
          maxLength: 100,
        })}
        error={!!errors.position}
      />
      <Button variant="contained" type="submit">
        Add category
      </Button>
    </Box>
  )
}
