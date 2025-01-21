import { createFileRoute } from '@tanstack/react-router'
import CircularProgress from '@mui/material/CircularProgress'
import { useGetCategoryQuery } from '../../queries/categories/useGetCategoryQuery'
import { useGetPartsForCategoryQuery } from '../../queries/parts/useGetPartsForCategoryQuery'
import { PartTable } from '../../components/Parts/PartTable.tsx'
import { Container } from '@mui/material'
import { CustomBox } from '../../components/custom/CustomBox.tsx'
import { AddPartForm } from '../../components/Parts/AddPartForm.tsx'
import { CategoryHeader } from '../../components/Parts/CategoryHeader.tsx'

const CategoryView = () => {
  const params = Route.useParams()
  const { data: categoryData, isFetching: categoryFetching } =
    useGetCategoryQuery(params.categoryId)
  const { data: partsData, isFetching: partsFetching } =
    useGetPartsForCategoryQuery(params.categoryId)

  if (categoryFetching || partsFetching) return <CircularProgress />

  if (!categoryData) return <p>No category.</p>
  if (!partsData) return <p>No parts.</p>


  return (
    <Container>
      <CustomBox>
        <CategoryHeader title={categoryData.name} subtitle={categoryData.identier}/>
        <AddPartForm />
      <PartTable data={partsData} isFetching={partsFetching} />
    </CustomBox>
    </Container>
  )
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryView,
})
