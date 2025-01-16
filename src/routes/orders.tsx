import { createFileRoute } from '@tanstack/react-router'
import { CircularProgress } from '@mui/material'
import { useGetOrdersQuery } from '../queries/orders/useGetOrdersQuery'

const OrdersView = () => {
  const { data, isFetching } = useGetOrdersQuery()

  if (isFetching) return <CircularProgress />

  if (!data) return <p>Brak zamówień.</p>

  return (
    <>
      <ul>
        Zamówienia:
        {data.map((order) => (
          <li key={order.id}>
            <p>{order.firstName}</p>
            <p>{order.lastName}</p>
            <p>{order.email}</p>
            <p>{order.details}</p>
            <p>{order.value}</p>
          </li>
        ))}
      </ul>
      <hr />
    </>
  )
}

export const Route = createFileRoute('/orders')({
  component: OrdersView,
})
