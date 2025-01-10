import { createFileRoute } from '@tanstack/react-router'

const CategoryView = () => {
  const params = Route.useParams()
  return (
    <div>
      <h3>Witaj w kategorii: {params.categoryId} </h3>
      <h4>Lista części:</h4>
      <ul>
        <li>1.</li>
        <li>2.</li>
      </ul>
    </div>
  )
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryView,
})
