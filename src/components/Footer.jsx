import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      bgcolor: '#f9f9fb',
      color: '#98a2b3',
      py: 1.5,
      borderTop: '1px solid #e5e7eb',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      width: '100%',
      position: 'relative',
    }}
  >
    <Container maxWidth="lg" sx={{ textAlign: 'center', px: 2 }}>
      <Typography variant="body2" sx={{ fontSize: '12px', mb: 0.5 }}>
        Copyright © 2025 Pixedware
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
);

export default Footer;
