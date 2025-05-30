import {
  Box,
  Typography,
  Avatar,
  Grid,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Person } from '@mui/icons-material';

const Header = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // Hämtar användarnamn
  const currentUser = localStorage.getItem('currentUser') || 'User';

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    onLogout();
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#ffffff',
        px: 4,
        py: 2,
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            variant="body2"
            sx={{ color: '#9E9EAF', fontWeight: 500, fontSize: '0.875rem' }}
          >
            Dashboard / Events
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: '#1D1B33', fontWeight: 600, mt: 0.5 }}
          >
            Events
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Box textAlign="right" mr={1}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: '#1D1B33' }}
            >
              {currentUser}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#9E9EAF', fontSize: '0.75rem' }}
            >
              User
            </Typography>
          </Box>

          <IconButton onClick={handleMenuOpen}>
            <Avatar sx={{ 
              width: 40, 
              height: 40,
              bgcolor: '#1a237e',
            }}>
              <Person sx={{ color: '#fff' }} />
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Box>
      </Grid>
    </Box>
  );
};

export default Header;