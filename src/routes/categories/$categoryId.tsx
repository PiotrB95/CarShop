import { createFileRoute, useNavigate } from '@tanstack/react-router'
import CircularProgress from '@mui/material/CircularProgress'
import { useGetCategoryQuery } from '../../queries/categories/useGetCategoryQuery'
import { useGetPartsForCategoryQuery } from '../../queries/parts/useGetPartsForCategoryQuery'

const CategoryView = () => {
  const navigate = useNavigate()
  const params = Route.useParams()
  const { data: categoryData, isFetching: categoryFetching } =
    useGetCategoryQuery(params.categoryId)
  const { data: partsData, isFetching: partsFetching } =
    useGetPartsForCategoryQuery(params.categoryId)

  if (categoryFetching || partsFetching) return <CircularProgress />

  if (!categoryData) return <p>No category.</p>

  const onClickHandler = () => {
    navigate({ to: '/categories' })
  }

  return (
    <div>
      <button onClick={onClickHandler}>Wróć do listy kategorii</button>
      <h3>Witaj w kategorii: {categoryData.name}</h3>
      {!partsData ? (
        <p>No parts in this category.</p>
      ) : (
        <ul>
          {partsData.map((part) => (
            <li key={part.id}>
              {part.name} - {part.price}$
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryView,
})
