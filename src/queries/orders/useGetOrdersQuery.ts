import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { OrderEntity } from 'src/types/order.ts'

export const useGetOrdersQuery = () => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<OrderEntity[]>({
    queryKey: ['orders'],
    queryFn: async () => {
      return apiGet<OrderEntity[]>('orders')
    },
  })

  return {
    data,
    isFetching,
  }
}
