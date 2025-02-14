import {
  IconButton,
  Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead, TableRow
} from '@mui/material'
import { Delete, Visibility } from '@mui/icons-material'
import CircularProgress from '@mui/material/CircularProgress'
import { CategoryEntity } from '../../types/category.ts'
import { Link } from '@tanstack/react-router'
import { useDeleteCategoryMutation } from '../../queries/categories/useDeleteCategoryMutation.ts'

interface Props {
  data :CategoryEntity[],
  isFetching: boolean
}

export const CategoryTable = ({ data, isFetching }: Props) => {

  const {mutateAsync, isPending} = useDeleteCategoryMutation()

  const handleDelete = async (id: string) => {
    await mutateAsync(id)
  }

  return (
    <>
      {isFetching ? <CircularProgress /> : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Nazwa</TableCell>
                <TableCell align="left">Identyfikator</TableCell>
                <TableCell align="center">Akcja</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{category.id}</TableCell>
                  <TableCell align="left">{category.name}</TableCell>
                  <TableCell align="left">{category.identier}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/categories/$categoryId`}
                      params={{ categoryId: category.id }}
                    > <IconButton>
                      <Visibility />
                    </IconButton>
                    </Link>
                    <IconButton
                      onClick={async () => handleDelete(category.id)}
                      disabled={isPending}
                      >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        </TableContainer>)}
    </>
  )
}