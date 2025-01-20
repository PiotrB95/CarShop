import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CategoryEntity } from '../../types/category.ts'
import { useApi } from '../../hooks/useApi.ts'

export const useDeleteCategoryMutation = () => {

  const { apiDelete } = useApi()
  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['categories', 'delete'],
    mutationFn: async (categoryId: string) => {
      return apiDelete<CategoryEntity>(`categories/${categoryId}`)
    },
    onSuccess: (deleteCategory) => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
      return deleteCategory;
    }
  })

  return { mutateAsync, isPending };
}