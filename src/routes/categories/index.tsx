import { createFileRoute } from '@tanstack/react-router'
import { useGetCategoriesQuery } from '../../queries/categories/useGetCategoriesQuery'
import { CategoryTable } from '../../components/Category/CategoryTable.tsx'
import { Container} from '@mui/material'
import { CustomBox } from '../../components/custom/CustomBox.tsx'
import { AddCategoryForm } from '../../components/Category/AddCategoryForm.tsx'


const CategoriesView = () => {
  const { data: categories, isFetching } = useGetCategoriesQuery()

  if (!categories) return <p>Brak kategorii</p>

  return (
    <>
      <Container>
        <CustomBox>
          <AddCategoryForm />
          <CategoryTable data={categories} isFetching={isFetching}/>
        </CustomBox>
      </Container>
    </>
  )
}

export const Route = createFileRoute('/categories/')({
  component: CategoriesView,
})
