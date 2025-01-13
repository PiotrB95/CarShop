import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetCategoriesQuery } from '../../queries/categories/useGetCategoriesQuery'
import CircularProgress from '@mui/material/CircularProgress'

const CategoriesView = () => {
  const { data, isFetching } = useGetCategoriesQuery()

  if (isFetching) return <CircularProgress />

  if (!data) return <p>No data.</p>

  return (
    <>
      <p>Utwórz nową kategorię</p>
      <ul>
        Kategorie:
        {data.map((category) => (
          <li key={category.id}>
            <Link
              to="/categories/$categoryId"
              params={{ categoryId: category.id }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const Route = createFileRoute('/categories/')({
  component: CategoriesView,
})
