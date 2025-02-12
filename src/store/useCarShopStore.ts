import { PartEntity } from 'src/types/part'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  parts: PartEntity[]
  totalValue: number
  addPart: (part: PartEntity) => void
  removePart: (id: string) => void
  clearParts: () => void
}

export const useCarShopStore = create<Store>()(
  persist(
    (set) => ({
      parts: [],
      totalValue: 0,

      addPart: (part) =>
        set((state) => {
          const newParts = [...state.parts, part]
          const newTotalValue = newParts.reduce(
            (total, part) => total + part.price,
            0,
          )
          return {
            parts: newParts,
            totalValue: newTotalValue,
          }
        }),

      removePart: (id) =>
        set((state) => {
          const newParts = state.parts.filter((part) => part.id !== id)
          const newTotalValue = newParts.reduce(
            (total, part) => total + part.price,
            0,
          )
          return {
            parts: newParts,
            totalValue: newTotalValue,
          }
        }),

      clearParts: () =>
        set({
          parts: [],
          totalValue: 0,
        }),
    }),
    {
      name: 'order',
    },
  ),
)
