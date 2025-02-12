import { createRootRoute, Outlet } from '@tanstack/react-router'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import SubjectIcon from '@mui/icons-material/Subject'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import {
  StyledNavbarButtonContainer,
  StyledNavbarLogoTypography,
  StyledNavbarMainContainer,
} from '../components/navbar/navbar.styled'
import { LinkButton } from '../components/navbar/linkButton'

const RootView = () => {
  return (
    <>
      <StyledNavbarMainContainer>
        <StyledNavbarLogoTypography variant="h2">
          <DirectionsCarFilledIcon sx={{ fontSize: 'inherit' }} />
          Car Shop
        </StyledNavbarLogoTypography>
        <StyledNavbarButtonContainer>
          <LinkButton toRoute="/categories">
            <SubjectIcon />
            Kategorie
          </LinkButton>
          <LinkButton toRoute="/creator">
            <PsychologyIcon />
            Kreator
          </LinkButton>
          <LinkButton toRoute="/orders">
            <ShoppingCartCheckoutIcon />
            Zamówienia
          </LinkButton>
        </StyledNavbarButtonContainer>
      </StyledNavbarMainContainer>
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  component: RootView,
})
