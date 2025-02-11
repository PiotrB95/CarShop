import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PartDto, PartEntity } from '../../types/part.ts'

export const useCreatePartMutation = () => {
  const { apiPost } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['parts', 'create'],
    mutationFn: async (payload: PartDto) => {
      return apiPost<PartEntity, PartDto>('parts', payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['parts'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}