import {
  IconButton,
  Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead, TableRow
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import CircularProgress from '@mui/material/CircularProgress'
import { PartEntity } from '../../types/part.ts'


interface Props {
  data : PartEntity[],
  isFetching: boolean
}

export const PartTable = ({ data, isFetching }: Props) => {

  const handleDelete = (id: string) => () => {
    console.log('Usuwanie part o id:', id)
  }

  return (
    <>
      {isFetching ? <CircularProgress /> : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Nazwa częsci</TableCell>
                  <TableCell align="right">Cena</TableCell>
                  <TableCell align="right">Akcja</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((part) => (
                  <TableRow
                    key={part.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{part.id}</TableCell>
                    <TableCell align="right">{part.name}</TableCell>
                    <TableCell align="right">{part.price}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={handleDelete(part.id)}>
                        <Delete />
                      </IconButton>
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      )}
    </>)
}