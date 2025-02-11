import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CategoryEntity } from '../../types/category.ts'
import { useApi } from '../../hooks/useApi.ts'
import { useNotificationStore } from '../../store/useNotificationStore.ts'

export const useDeleteCategoryMutation = () => {
  const { apiDelete } = useApi()
  const queryClient = useQueryClient()
  const { showNotification } = useNotificationStore()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['categories', 'delete'],
    mutationFn: async (categoryId: string) => {
      return apiDelete<CategoryEntity>(`categories/${categoryId}`)
    },
    onSuccess: async (deleteCategory) => {
      showNotification(`Usunięto kategorię ${deleteCategory.name} o id ${deleteCategory.id}`, 'success')
      await queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      return deleteCategory;
    },
    onError:(e: Error) => {
      showNotification(`${e.message ? e.message : "Nie udało się usunąć kategorii"}`, 'error')
    }
  })

  return { mutateAsync, isPending };
}