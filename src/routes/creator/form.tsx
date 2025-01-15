import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCarShopStore } from '../../store/useCarShopStore'
import { Button } from '@mui/material'

const FormView = () => {
  const { parts, totalValue, clearParts } = useCarShopStore()
  const navigate = useNavigate()

  const submitHandler = () => {
    clearParts()
    navigate({ to: '/creator/congratulations' })
  }

  return (
    <div>
      <h3>Formularz końcowy</h3>
      <div>
        <p>Podsumowanie:</p>
        <p>Lista części:</p>
        <ul>
          {parts.map((part) => (
            <li key={part.id}>
              {part.name} - {part.price} zł
            </li>
          ))}
        </ul>
        <p>Suma: {totalValue}</p>
      </div>
      {/* TODO */}
      <input type="name" placeholder="Podaj imię" />
      <input type="surname" placeholder="Podaj nazwisko" />
      <input type="email" placeholder="Podaj email" />
      {/* TODO ^ */}
      <Button
        sx={{ width: '30%', margin: '15px' }}
        variant="contained"
        onClick={submitHandler}
      >
        Wyślij formularz
      </Button>
    </div>
  )
}

export const Route = createFileRoute('/creator/form')({
  component: FormView,
})
