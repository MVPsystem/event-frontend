import { Box, Typography, Chip, LinearProgress, Button } from '@mui/material';
import { LocationOn, ConfirmationNumber, CalendarToday } from '@mui/icons-material';
import { useState } from 'react';
import RegisterPopup from './RegisterPopup';

const EventCard = ({ event }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const ticketsSold = event.ticketsSold || 0;
  const totalTickets = event.totalTickets || 1;
  const progress = Math.min(100, Math.max(0, (ticketsSold / totalTickets) * 100));
  const ticketsLeft = event.ticketsLeft ?? totalTickets - ticketsSold;

  return (
    <>
      <Box sx={{
        display: 'flex',
        p: 2,
        borderRadius: '12px',
        border: '1px solid #e0e0e0',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': { boxShadow: '0px 4px 12px rgba(0,0,0,0.08)' }
      }}>
        
        <Box sx={{
          width: 100,
          height: 100,
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundImage: `url('/Tech.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mr: 2
        }} />

        
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Chip label={event.category} size="small" sx={{
            width: 'fit-content',
            mb: 0.5,
            backgroundColor: '#e8eaf6',
            color: '#1a237e',
            fontWeight: 500
          }} />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
            {event.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {event.shortDescription}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">{event.location}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarToday sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Sidopanel */}
        <Box sx={{ width: 160, ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 6,
                borderRadius: 3,
                flexGrow: 1,
                mr: 1,
                backgroundColor: '#f0f0f0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: progress > 75 ? '#4caf50' : progress > 25 ? '#ff9800' : '#f44336'
                }
              }}
            />
            <Typography variant="body2" sx={{ minWidth: 40 }}>
              {Math.round(progress)}%
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ConfirmationNumber sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2">{ticketsLeft} left</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>${event.price}</Typography>
          </Box>

          <Button
            variant="contained"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => setOpenPopup(true)}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Registration Popup skärm */}
      {openPopup && (
        <RegisterPopup
          open={openPopup}
          onClose={(success) => {
            setOpenPopup(false);
            if (success) alert('Registered successfully!');
          }}
          event={event}
        />
      )}
    </>
  );
};

export default EventCard;
