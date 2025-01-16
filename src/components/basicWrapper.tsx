import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface BasicWrapperInterface {
  children: ReactNode
}

export const BasicWrapper = ({ children }: BasicWrapperInterface) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
          border: '2px solid #1976d2',
          borderRadius: '25px',
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
