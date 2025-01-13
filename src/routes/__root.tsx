import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import SubjectIcon from '@mui/icons-material/Subject'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

const RootView = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          wifth: '100%',
          padding: '20px',
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center' }}>
          <DirectionsCarFilledIcon sx={{ fontSize: 'inherit' }} />
          Car Shop
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            sx={{ width: '30%', margin: '15px' }}
            component={Link}
            to="/categories"
            variant="contained"
            color="primary"
          >
            <SubjectIcon />
            Kategorie
          </Button>
          <Button
            sx={{ width: '30%', margin: '15px' }}
            component={Link}
            to="/creator"
            variant="contained"
            color="primary"
          >
            <PsychologyIcon />
            Kreator
          </Button>
          <Button
            sx={{ width: '30%', margin: '15px' }}
            component={Link}
            to="/orders"
            variant="contained"
            color="primary"
          >
            <ShoppingCartCheckoutIcon />
            Zamówienia
          </Button>
        </Box>
      </Box>
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  component: RootView,
})
