import { useDeleteCategoryMutation } from '../../../queries/categories/useDeleteCategoryMutation.ts'
import { useState } from 'react'

type msgAlert = {
  msg: string
  status: 'error' | 'warning' | 'info' | 'success'
}

export const useDeleteCategory = () => {
  const { mutateAsync, isPending } = useDeleteCategoryMutation()
  const [alert, setAlert] = useState<msgAlert  | null>(null)
  const [open, setOpen] = useState(false)

  const handleDelete = async (id: string) => {
    setAlert(null)
    await mutateAsync(id, {
      onSuccess: (deleteCategory) => {
        setAlert({
          msg: `Usunięto kategorię ${deleteCategory.name} o id ${deleteCategory.id}`,
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
  return { handleDelete, isPending, alert, open, setOpen  }
}