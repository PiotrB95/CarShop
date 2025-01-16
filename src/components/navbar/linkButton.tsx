import { Button } from '@mui/material'
import { Link } from '@tanstack/react-router'
import { ReactNode } from 'react'

interface LinkButtonInterface {
  children: ReactNode
  toRoute: string
}

export const LinkButton = ({ children, toRoute }: LinkButtonInterface) => {
  return (
    <>
      <Button
        sx={{ width: '30%', margin: '15px' }}
        component={Link}
        to={toRoute}
        variant="contained"
        color="primary"
      >
        {children}
      </Button>
    </>
  )
}
