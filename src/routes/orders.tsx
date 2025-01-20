import { createFileRoute } from '@tanstack/react-router'
import { CircularProgress } from '@mui/material'
import { useGetOrdersQuery } from '../queries/orders/useGetOrdersQuery'
import { BasicWrapper } from '../components/basicWrapper'
import { OrdersList } from '../components/orders/ordersList'

const OrdersView = () => {
  const { data, isFetching } = useGetOrdersQuery()

  if (isFetching) return <CircularProgress />

  if (!data) return <p>Brak zamówień.</p>

  return (
    <BasicWrapper>
      <OrdersList orders={data} />
    </BasicWrapper>
  )
}

export const Route = createFileRoute('/orders')({
  component: OrdersView,
})
