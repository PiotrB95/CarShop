import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { CategoryDto, CategoryEntity } from '../../types/category.ts'

export const useCreateCategoryMutation = () => {
  const { apiPost } = useApi()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['categories', 'create'],
    mutationFn: async (payload: CategoryDto) => {
      return apiPost<CategoryEntity, CategoryDto>('categories', payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      })
    },
  })

  return {
    mutate,
    isPending,
  }
}