import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
  
const RootView = () => {
    return <div>
        <h1>Car Shop Menu</h1>
        <Link to='/categories/$categoryId' params={{categoryId: '12'}}> Post12</Link>
        <Outlet />
    </div>
}

export const Route = createRootRoute({
  component: RootView,
})

