import { Box, Button, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useNavigate } from '@tanstack/react-router'

interface Props {
  title: string,
  subtitle?: string,
  onClickHandler?: () => void,
}

export const CategoryHeader = ({ subtitle, title}: Props) => {
  const navigate = useNavigate()
  // const { handleDelete, open, setOpen, isPending, alert } = useDeleteCategory()

  const handleBack = () => {
    navigate({ to: '/categories' })
  }

  const handleDeleteCategory = () => {
    console.log('test')
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
        <Button variant="contained" color="error" onClick={handleDeleteCategory}><Delete/></Button>
      </div>
    </Box>
  )
}