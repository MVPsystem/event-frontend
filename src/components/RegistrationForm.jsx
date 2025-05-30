import { useState } from 'react';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';
import { createRegistration } from '../services/api';

const RegistrationForm = ({ eventId }) => {
  const [formData, setFormData] = useState({
    attendeeName: '',
    attendeeEmail: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRegistration({
        eventId,
        attendeeName: formData.attendeeName,
        attendeeEmail: formData.attendeeEmail,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  if (submitted) {
    return (
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h6" color="success.main" gutterBottom>
          Registration successful!
        </Typography>
        <Typography>Thank you for registering.</Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 4,
        borderRadius: 2,
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: '600' }}>
        Register for this event
      </Typography>

      <TextField
        label="Full Name"
        name="attendeeName"
        value={formData.attendeeName}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />

      <TextField
        label="Email"
        name="attendeeEmail"
        type="email"
        value={formData.attendeeEmail}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 1,
          backgroundColor: '#1a237e',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#303f9f',
          },
        }}
      >
        Register
      </Button>
    </Paper>
  );
};

export default RegistrationForm;
