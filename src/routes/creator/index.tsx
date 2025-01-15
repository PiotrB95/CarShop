import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetCategoriesQuery } from '../../queries/categories/useGetCategoriesQuery'
import { Button } from '@mui/material'

const CreatorView = () => {
  const { data, isFetching } = useGetCategoriesQuery()

  if (isFetching) return <p>Ładowanie</p>

  if (!data) return <p>Brak kategorii</p>

  const firstCategoryId = data.sort((a, b) => {
    return a.position - b.position
  })[0].id

  return (
    <>
      <h2>
        Witaj w kreatorze, który przeprowadzi Cię przez proces wyboru części ze
        wszystkich kategorii
      </h2>
      <Button
        sx={{ width: '30%', margin: '15px' }}
        variant="contained"
        component={Link}
        to={`/creator/${firstCategoryId}`}
      >
        Rozpocznij proces!
      </Button>
    </>
  )
}

export const Route = createFileRoute('/creator/')({
  component: CreatorView,
})
