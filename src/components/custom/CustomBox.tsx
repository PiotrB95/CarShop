import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

const StyledCustomBox = styled(Box)({
  width: "100%",
  height: "80",
  margin: "20px 0",
  padding: "10px",
  border: `1px solid #ccc`,
  borderRadius: 10,
  boxShadow: "0 0 10px #ccc",
  display: "flex",
  flexDirection: "column",
});


export const CustomBox = ({ children }: { children: ReactNode }) => {
  return (
    <StyledCustomBox>
      {children}
    </StyledCustomBox>
  )
}