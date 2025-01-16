import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { OrderEntity } from 'src/types/order'

interface OrdersListInterface {
  orders: OrderEntity[]
}

export const OrdersList = ({ orders }: OrdersListInterface) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Imię</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nazwisko</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>
              Wartość zamówienia [zł]
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Szczegóły</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.firstName}</TableCell>
              <TableCell>{order.lastName}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.value}</TableCell>
              <TableCell>{order.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
