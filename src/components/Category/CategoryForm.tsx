import { Button, FormGroup, Input, styled } from '@mui/material'

const StyledFormGroup = styled(FormGroup)({
  width: "auto",
  marginBottom: "20px",
  padding: "10px",
  borderRadius: 10,
});

const StyledInput = styled(Input)({
  margin: "10px",
});

export const CategoryForm = () => {
  return (
        <StyledFormGroup>
          <StyledInput placeholder='Category name' type="text" id="name" name="name" />
          <StyledInput placeholder='Identifier name' type="text" id="name" name="name" />
          <Button variant='contained'>Add category</Button>
        </StyledFormGroup>
  )
}