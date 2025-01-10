import { createFileRoute } from '@tanstack/react-router'

const CategoriesView = () => {
  return (
    <>
      <p>Utwórz nową kategorię</p>
      <h2>Kategorie:</h2>
      <p>Opony: usun kategorię wraz ze wszystkimi elementami</p>
    </>
  )
}

export const Route = createFileRoute('/categories/')({
  component: CategoriesView,
})
