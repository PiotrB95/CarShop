import { Box, Button, styled, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PartFormData } from './AddPartForm.tsx'

interface Props {
  onSubmit: SubmitHandler<PartFormData>
}

const StyledTextField = styled(TextField)({
  margin: "10px",
});

export const PartForm = ({onSubmit}:Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartFormData>()


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
        <StyledTextField type="text" placeholder="Nazwa" {...register('name', { required: true, minLength: 3 })} error={!!errors.name}/>
        <StyledTextField type="number" placeholder='Cena'{...register('price', { required: true, minLength: 0, maxLength: 100000 })} error={!!errors.price}/>
        <StyledTextField type="text" placeholder="Nazwa" {...register('partId', { required: true, minLength: 3 })} error={!!errors.partId}/>
        <Button variant='contained' type='submit'>Add part</Button>
      </Box>
  )
}