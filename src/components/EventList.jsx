import { Grid, Container, Typography } from '@mui/material';
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

  if (loading) {
    return (
      <Container sx={{ ml: '280px', mt: 4 }}>
        <Typography variant="body1">Loading events...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ ml: '280px', py: 2 }}>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={6}>
            <EventCard
              event={event}
              showForm={selectedEventId === event.id}
              onRegisterClick={toggleRegistrationForm}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;
