// components/RegisterPopup.jsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const RegisterPopup = ({ open, onClose, event }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) return;

    try {
      setSubmitting(true);
      await axios.post('http://localhost:5295/api/registrations', {
        name: formData.name,
        email: formData.email,
        eventId: event.id
      });
      onClose(true);
    } catch (err) {
      console.error('Registration failed:', err);
      onClose(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>Register for {event?.name}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          name="name"
          label="Your Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Your Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)} disabled={submitting}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Register'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterPopup;
