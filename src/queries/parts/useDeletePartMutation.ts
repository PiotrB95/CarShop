import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PartEntity } from '../../types/part.ts'
import { useNotificationStore } from '../../store/useNotificationStore.ts'

export const useDeletePartMutation = () => {

  const { apiDelete } = useApi()
  const queryClient = useQueryClient()
  const { showNotification } = useNotificationStore()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['parts', 'delete'],
    mutationFn: async (partId: string) => {
      return apiDelete<PartEntity>(`parts/${partId}`)
    },
    onSuccess: async (deletePart) => {
      showNotification(`Usunięto część ${deletePart.name} o id ${deletePart.id}`, 'success')
      await queryClient.invalidateQueries({
        queryKey: ['parts'],
      })
      return deletePart;
    },
    onError:(e: Error) => {
      showNotification(`${e.message ? e.message : "Nie udało się usunąć części"}`, 'error')
    }
  })

  return { mutateAsync, isPending };
}