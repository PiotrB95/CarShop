import { createFileRoute, useNavigate } from '@tanstack/react-router'
import CircularProgress from '@mui/material/CircularProgress'
import { useGetCategoryQuery } from '../../queries/categories/useGetCategoryQuery'
import { useGetPartsForCategoryQuery } from '../../queries/parts/useGetPartsForCategoryQuery'
import { PartTable } from '../../components/Parts/PartTable.tsx'
import { Box, Button, Container, Typography } from '@mui/material'
import { CustomBox } from '../../components/custom/CustomBox.tsx'
import { Delete } from '@mui/icons-material'

const CategoryView = () => {
  const navigate = useNavigate()
  const params = Route.useParams()
  const { data: categoryData, isFetching: categoryFetching } =
    useGetCategoryQuery(params.categoryId)
  const { data: partsData, isFetching: partsFetching } =
    useGetPartsForCategoryQuery(params.categoryId)

  if (categoryFetching || partsFetching) return <CircularProgress />

  if (!categoryData) return <p>No category.</p>
  if (!partsData) return <p>No parts.</p>
  const onClickHandler = () => {
    navigate({ to: '/categories' })
  }

  return (
    <Container>
      <CustomBox>
        <Box style={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          <div>
            <Typography variant="h4">{categoryData.name}</Typography>
            <p>{categoryData.id}</p>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={onClickHandler}>Back</Button>
            <Button variant="contained" color="error" onClick={onClickHandler}><Delete/></Button>
          </div>
      </Box>
      <PartTable data={partsData} isFetching={partsFetching} />
    </CustomBox>
    </Container>
  )
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryView,
})
