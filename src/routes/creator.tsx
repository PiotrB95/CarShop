import { createFileRoute } from '@tanstack/react-router'

const CreatorView = () => {
  return <h2>Witaj w kraetorze, który przeprowadzi Cię przez proces wyboru części ze wszystkich kategorii</h2>
}

export const Route = createFileRoute('/creator')({
  component: CreatorView,
})

