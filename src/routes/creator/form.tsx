import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCarShopStore } from '../../store/useCarShopStore'
import { useCreateOrderMutation } from '../../queries/orders/useCreateOrderMutation'
import { OrderForm } from '../../components/form/orderForm'
import { Summary } from '../../components/form/summary'
import { BasicWrapper } from '../../components/basicWrapper'

export type FormData = {
  firstname: string
  lastname: string
  email: string
}

const FormView = () => {
  const { parts, totalValue, clearParts } = useCarShopStore()
  const { mutate, isPending } = useCreateOrderMutation()

  const navigate = useNavigate()

  const orderDetails = () => {
    return parts.map((part) => part.name.toLowerCase()).join(', ')
  }

  const onSubmit = (data: FormData) => {
    mutate({
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      details: orderDetails(),
      value: totalValue,
    })
    clearParts()
    navigate({ to: '/creator/congratulations' })
  }

  return (
    <BasicWrapper>
      <OrderForm onSubmit={onSubmit} />
      <h3>Podsumowanie</h3>
      <Summary parts={parts} totalValue={totalValue} />
      {isPending ? <p>Dane są wysyłane...</p> : null}
    </BasicWrapper>
  )
}

export const Route = createFileRoute('/creator/form')({
  component: FormView,
})
