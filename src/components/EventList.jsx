import { Box, Typography } from '@mui/material';
import EventCard from './EventCard';
import { getEvents } from '../services/api';
import { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const toggleRegistrationForm = (eventId) => {
    setSelectedEventId((prevId) => (prevId === eventId ? null : eventId));
  };

  const handleRegistrationSuccess = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              ticketsSold: (event.ticketsSold || 0) + 1,
              ticketsLeft:
                (event.ticketsLeft ?? (event.totalTickets - event.ticketsSold)) - 1,
            }
          : event
      )
    );
  };

  if (loading) {
    return (
      <Box sx={{ ml: '200px', mt: 4 }}>
        <Typography variant="body1">Loading events...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ ml: '0px', pr: 4, py: 2, maxWidth: '1000px', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            showForm={selectedEventId === event.id}
            onRegisterClick={toggleRegistrationForm}
            onRegisterSuccess={handleRegistrationSuccess}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EventList;
