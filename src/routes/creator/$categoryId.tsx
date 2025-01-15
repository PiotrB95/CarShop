import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useGetCategoryQuery } from '../../queries/categories/useGetCategoryQuery'
import { useGetPartsForCategoryQuery } from '../../queries/parts/useGetPartsForCategoryQuery'
import { useGetCategoriesQuery } from '../../queries/categories/useGetCategoriesQuery'
import { PartEntity } from 'src/types/part'
import { useCarShopStore } from '../../store/useCarShopStore'

const CreatorCategoryView = () => {
  const { parts, totalValue, addPart, removePart } = useCarShopStore()
  const navigate = useNavigate()
  const params = Route.useParams()
  const { data: categories, isFetching: categoriesFetching } =
    useGetCategoriesQuery()

  const { data: categoryData, isFetching: categoryFetching } =
    useGetCategoryQuery(params.categoryId)

  const { data: partsData, isFetching: partsFetching } =
    useGetPartsForCategoryQuery(params.categoryId)

  if (categoryFetching || partsFetching || categoriesFetching)
    return <CircularProgress />

  if (!categoryData || !partsData || !categories) return <p>No category.</p>

  const sortedCategories = categories.sort((a, b) => {
    return a.position - b.position
  })

  const currentIndex = sortedCategories.findIndex(
    (category) => category.id === categoryData.id,
  )

  const handleCheckboxChange = (part: PartEntity) => {
    const exist = parts.find(({ id }) => id === part.id)
    if (exist) {
      removePart(part.id)
    } else {
      addPart(part)
    }
  }

  const handleNextButton = () => {
    navigate({
      to: `/creator/${sortedCategories[currentIndex + 1]?.id || 'form'}`,
    })
  }

  return (
    <div>
      <h3>
        Wybierz <u>minimum jedną</u> część dla kategorii: {categoryData.name}
      </h3>
      <Box>Wartość koszyka: {totalValue} zł</Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Wybierz</TableCell>
              <TableCell>Nazwa</TableCell>
              <TableCell>Cena</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partsData.map((part) => (
              <TableRow key={part.id}>
                <TableCell>
                  <Checkbox
                    checked={parts.some((p) => p.id === part.id)}
                    onChange={() => handleCheckboxChange(part)}
                  />
                </TableCell>
                <TableCell>{part.name}</TableCell>
                <TableCell>{part.price} zł</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        sx={{ width: '30%', margin: '15px' }}
        variant="contained"
        onClick={handleNextButton}
        disabled={!parts.some((part) => part.categoryId === categoryData.id)}
      >
        Dalej
      </Button>
    </div>
  )
}

export const Route = createFileRoute('/creator/$categoryId')({
  component: CreatorCategoryView,
})
