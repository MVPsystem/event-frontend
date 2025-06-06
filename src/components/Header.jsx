import {
  Box,
  Avatar,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Person } from '@mui/icons-material';

const Header = () => {
  const currentUser = localStorage.getItem('currentUser') || 'User';

  return (
    <Box
      sx={{
        width: 'calc(100% - 280px)', // full width minus sidebar
        bgcolor: '#ffffff',         // white background
        px: 0,                      // remove padding so inner box fills width
        py: 2,
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        left: '280px',
        zIndex: 1000,
      }}
    >
      {/* Runda kanter */}
      <Box
        sx={{
          bgcolor: '#f4f0fe',
          borderRadius: '20px',
          px: 4,
          py: 2,
          mx: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <Grid container alignItems="center" justifyContent="flex-end">
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

            <IconButton>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: '#1a237e',
                }}
              >
                <Person sx={{ color: '#fff' }} />
              </Avatar>
            </IconButton>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
