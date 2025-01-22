import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PartEntity } from '../../types/part.ts'

export const useDeletePartMutation = () => {

  const { apiDelete } = useApi()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['parts', 'delete'],
    mutationFn: async (partId: string) => {
      return apiDelete<PartEntity>(`parts/${partId}`)
    },
    onSuccess: async (deletePart) => {
      await queryClient.invalidateQueries({
        queryKey: ['parts'],
      })
      return deletePart;
    }
  })

  return { mutateAsync, isPending };
}