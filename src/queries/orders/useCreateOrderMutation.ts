import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { OrderDto, OrderEntity } from '../../types/order.ts'

export const useCreateOrderMutation = () => {
  const { apiPost } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['orders', 'create'],
    mutationFn: async (payload: OrderDto) => {
      return apiPost<OrderEntity, OrderDto>('orders', payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}
