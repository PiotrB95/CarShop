import { Box, Button } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'
import { BasicWrapper } from '../../components/basicWrapper'

const CreatorCongratulations = () => {
  return (
    <BasicWrapper>
      <Box sx={{ padding: '30px 0px', fontWeight: 'bold', fontSize: '24px' }}>
        Zamówienie zostało złożone!
      </Box>
      <Button
        sx={{ width: '30%', margin: '15px' }}
        variant="contained"
        component={Link}
        to={'/'}
      >
        Przejdź na stronę główną
      </Button>
    </BasicWrapper>
  )
}

export const Route = createFileRoute('/creator/congratulations')({
  component: CreatorCongratulations,
})
