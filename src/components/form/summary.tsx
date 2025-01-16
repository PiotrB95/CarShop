import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { PartEntity } from '../../types/part'

interface SummaryInterface {
  parts: PartEntity[]
  totalValue: number
}

export const Summary = ({ parts, totalValue }: SummaryInterface) => {
  return (
    <Box sx={{ width: '80%' }}>
      <p>Lista części:</p>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell>Cena</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parts.map((part) => (
              <TableRow key={part.id}>
                <TableCell>{part.name}</TableCell>
                <TableCell>{part.price} zł</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Suma:</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>{totalValue} zł</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
