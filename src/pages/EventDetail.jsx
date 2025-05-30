import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper } from '@mui/material';
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm';
import { getEvent, getRegistrations } from '../services/api';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventResponse = await getEvent(id);
        setEvent(eventResponse.data);
        
        const registrationsResponse = await getRegistrations(id);
        setRegistrations(registrationsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <Container>Loading event details...</Container>
      </>
    );
  }

  if (!event) {
    return (
      <>
        <Header />
        <Container>Event not found</Container>
      </>
    );
  }

  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            {event.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {new Date(event.date).toLocaleDateString()} | {event.location}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            {event.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Event Details
              </Typography>
              <Typography variant="body1">
                More details about the event would go here...
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <RegistrationForm eventId={event.id} />
            </Paper>
            <Paper sx={{ p: 3, mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Attendees ({registrations.length})
              </Typography>
              {registrations.length > 0 ? (
                <ul>
                  {registrations.map((reg) => (
                    <li key={reg.id}>
                      {reg.attendeeName} ({reg.attendeeEmail})
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography>No attendees yet.</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDetail;