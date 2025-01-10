import { createFileRoute } from '@tanstack/react-router'

const CategoryView = () => {
  const params = Route.useParams()
  return <h3>Witaj w kategorii: {params.categoryId} </h3>
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryView,
})
