import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootView = () => {
  return (
    <div>
      <h1>Car Shop Menu</h1>
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootView,
})
