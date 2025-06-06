import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      width: 'calc(100% - 280px)',
      bgcolor: '#ffffff',
      px: 4,
      py: 1.5,
      borderTop: '1px solid #e5e7eb',
      position: 'fixed',
      bottom: 0,
      left: '280px',
      zIndex: 1000,
    }}
  >
    <Box
      sx={{
        bgcolor: '#f4f0fe',
        borderRadius: '20px',
        px: 3,
        py: 2,
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 2 }}>
        <Typography variant="body2" sx={{ fontSize: '12px', mb: 0.5, color: '#98a2b3' }}>
          Copyright © 2025 Peterdraw
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Link href="#" underline="none" sx={{ color: '#98a2b3', fontSize: '12px' }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="none" sx={{ color: '#98a2b3', fontSize: '12px' }}>
            Terms and conditions
          </Link>
          <Link href="#" underline="none" sx={{ color: '#98a2b3', fontSize: '12px' }}>
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default Footer;
