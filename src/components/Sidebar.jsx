import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import DoorIcon from '../assets/dooricon.png';

import DashboardIcon from '../assets/Dashboard.png';
import BookingsIcon from '../assets/Bookings.png';
import InvoicesIcon from '../assets/Invoices.png';
import InboxIcon from '../assets/Inbox.png';
import CalendarIcon from '../assets/Calendar.png';
import EventsIcon from '../assets/Events.png';
import FinancialsIcon from '../assets/Financials.png';
import GalleryIcon from '../assets/Gallery.png';
import FeedbackIcon from '../assets/Feedback.png';

import logo from '../assets/logo.png';

const menuItems = [
  { text: 'Dashboard', icon: DashboardIcon },
  { text: 'Bookings', icon: BookingsIcon },
  { text: 'Invoices', icon: InvoicesIcon },
  { text: 'Inbox', icon: InboxIcon },
  { text: 'Calendar', icon: CalendarIcon },
  { text: 'Events', icon: EventsIcon, isPink: true },
  { text: 'Financials', icon: FinancialsIcon },
  { text: 'Gallery', icon: GalleryIcon },
  { text: 'Feedback', icon: FeedbackIcon },
];

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onLogout();
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        width: 280,
        bgcolor: '#f4f0fe',
        p: 2,
        position: 'fixed',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1px 0 5px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        sx={{
          mb: 3,
          pt: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
        }}
      >
        <img src={logo} alt="Logo" style={{ height: 30, width: 'auto' }} />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <List>
          {menuItems.map(({ text, icon, isPink }) => (
            <ListItem
              button
              key={text}
              sx={{
                borderRadius: '10px',
                mb: 0.5,
                px: 2,
                '&:hover': {
                  backgroundColor: '#fbe9ff',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <img
                  src={icon}
                  alt={text}
                  style={{ height: 24, width: 24, objectFit: 'contain' }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontWeight: '400',
                  color: isPink ? '#f86cfc' : '#4b5563',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Logga ut ny knapp */}
      <Box sx={{ mt: 'auto', px: 2, mb: 1 }}>
        <Button
          type="button"
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: '12px',
            textTransform: 'none',
            justifyContent: 'flex-start',
            padding: '8px 12px',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: '#333',
            borderColor: '#ccc',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              backgroundColor: '#f0f0f0',
              borderColor: '#999',
            },
          }}
          onClick={handleSignOut}
        >
          <img src={DoorIcon} alt="Sign Out" style={{ width: 20, height: 20 }} />
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
