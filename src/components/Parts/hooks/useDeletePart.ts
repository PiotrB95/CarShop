import { useState } from 'react'
import { useDeletePartMutation } from '../../../queries/parts/useDeletePartMutation.ts'

type msgAlert = {
  msg: string
  status: 'error' | 'warning' | 'info' | 'success'
}

export const useDeletePart = () => {
  const { mutateAsync, isPending } = useDeletePartMutation()
  const [alert, setAlert] = useState<msgAlert  | null>(null)
  const [open, setOpen] = useState(false)

  const handleDelete = async (id: string) => {
    setAlert(null);
    await mutateAsync(id, {
      onSuccess: (deletePart) => {
        setAlert({
          msg: `Usunięto cześć ${deletePart.name} o id ${deletePart.id}`,
          status: 'success'
        })
        setOpen(true)
      },
      onError: () => {
        setAlert({
          msg: `Nie udało się usunąć kategorii`,
          status: 'error'
        })
        setOpen(true)
      }
    })
  }
  return { handleDelete, isPending, alert, open, setOpen }
}