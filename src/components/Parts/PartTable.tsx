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
import { useDeletePartMutation } from '../../queries/parts/useDeletePartMutation.ts'


interface Props {
  data : PartEntity[],
  isFetching: boolean
}

export const PartTable = ({ data, isFetching }: Props) => {

  const { mutateAsync, isPending } = useDeletePartMutation()

  const handleDelete = async (id: string) => {
    await mutateAsync(id)
  }

  return (
    <>
      {isFetching ? <CircularProgress /> : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Nazwa części</TableCell>
                  <TableCell align="left">Cena</TableCell>
                  <TableCell align="center">Akcja</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((part) => (
                  <TableRow
                    key={part.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{part.id}</TableCell>
                    <TableCell align="left">{part.name}</TableCell>
                    <TableCell align="left">{part.price}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => handleDelete(part.id)}
                        disabled={isPending}
                      >
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