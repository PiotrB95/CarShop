import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { CategoryEntity } from '../../types/category.ts'

export const useGetCategoryQuery = (categoryId: string | null) => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<CategoryEntity>({
    queryKey: ['caregories', categoryId],
    queryFn: async () => {
      return apiGet<CategoryEntity>(`categories/${categoryId}`)
    },
    enabled: !!categoryId,
  })

  return {
    data,
    isFetching,
  }
}
