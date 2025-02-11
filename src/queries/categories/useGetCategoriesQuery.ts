import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { CategoryEntity } from '../../types/category.ts'

export const useGetCategoriesQuery = () => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<CategoryEntity[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      return apiGet<CategoryEntity[]>('categories')
    },
  })

  return {
    data,
    isFetching,
  }
}
