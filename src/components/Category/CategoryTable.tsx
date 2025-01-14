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

interface Props {
  data :CategoryEntity[],
  isFetching: boolean
}


export const CategoryTable = ({ data, isFetching }: Props) => {

  const handleDelete = (id: string) => () => {
    console.log('Usuwanie kategorii o id:', id)
  }

  return (
    <>
      {isFetching ? <CircularProgress /> : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nazwa częsci</TableCell>
                <TableCell align="right">Cena</TableCell>
                <TableCell align="right">Akcja</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{category.id}</TableCell>
                  <TableCell align="right">{category.name}</TableCell>
                  <TableCell align="right">{category.identier}</TableCell>
                  <TableCell align="right">
                    <Link
                      to={`/categories/$categoryId`}
                      params={{ categoryId: category.id }}
                    > <IconButton>
                      <Visibility />
                    </IconButton>
                    </Link>
                    <IconButton
                      onClick={handleDelete(category.id)}>
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