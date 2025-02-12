import { useQuery } from '@tanstack/react-query'
import { useApi } from '../../hooks/useApi.ts'
import { PartEntity } from '../../types/part.ts'

export const useGetPartsForCategoryQuery = (categoryId: string | number) => {
  const { apiGet } = useApi()

  const { data, isFetching } = useQuery<PartEntity[]>({
    queryKey: ['parts', categoryId],
    queryFn: async () => {
      return apiGet<PartEntity[]>(`parts?categoryId=${categoryId}`)
    },
  })

  return {
    data,
    isFetching,
  }
}
