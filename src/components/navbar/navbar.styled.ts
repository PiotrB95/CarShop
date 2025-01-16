import { styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'

export const StyledNavbarMainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  padding: '25px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '4px solid #1976d2',
  borderRadius: '25px',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
})

export const StyledNavbarLogoTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
})

export const StyledNavbarButtonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
})
