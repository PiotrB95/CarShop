import { Box, Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormData } from '../../routes/creator/form'

interface OrderFormInterface {
  onSubmit: SubmitHandler<FormData>
}

export const OrderForm = ({ onSubmit }: OrderFormInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '10px',
          width: '80%',
        }}
      >
        <TextField
          sx={{ margin: '10px' }}
          label="Imię"
          variant="outlined"
          {...register('firstname', { required: true, minLength: 3 })}
          error={!!errors.firstname}
          helperText={
            errors.firstname ? 'Imię musi posiadać minimum 3 znaki.' : ''
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          label="Nazwisko"
          variant="outlined"
          {...register('lastname', { required: true, minLength: 3 })}
          error={!!errors.lastname}
          helperText={
            errors.lastname ? 'Nazwisko musi posiadać minimum 3 znaki.' : ''
          }
        />
        <TextField
          sx={{ margin: '10px' }}
          label="Email"
          variant="outlined"
          {...register('email', {
            required: true,
            minLength: 3,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          error={!!errors.email}
          helperText={errors.email ? 'Nieprawidłowy adres email.' : ''}
        />
        <Button
          sx={{ margin: '10px' }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Złóż zamówienie
        </Button>
      </Box>
    </>
  )
}
