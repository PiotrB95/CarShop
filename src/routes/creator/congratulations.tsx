import { Button } from '@mui/material'
import { createFileRoute, Link } from '@tanstack/react-router'

const CreatorCongratulations = () => {
  return (
    <>
      <div>Zamówienie zostało złożone!</div>
      <Button
        sx={{ width: '30%', margin: '15px' }}
        variant="contained"
        component={Link}
        to={'/'}
      >
        Przejdź na stronę główną
      </Button>
    </>
  )
}

export const Route = createFileRoute('/creator/congratulations')({
  component: CreatorCongratulations,
})
