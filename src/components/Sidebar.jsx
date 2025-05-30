import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Book as BookingsIcon,
  Receipt as InvoicesIcon,
  Mail as InboxIcon,
  CalendarToday as CalendarIcon,
  Event as EventsIcon,
  AttachMoney as FinancialsIcon,
  Photo as GalleryIcon,
  Feedback as FeedbackIcon,
  ExitToApp as SignOutIcon
} from '@mui/icons-material';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Bookings', icon: <BookingsIcon /> },
  { text: 'Invoices', icon: <InvoicesIcon /> },
  { text: 'Inbox', icon: <InboxIcon /> },
  { text: 'Calendar', icon: <CalendarIcon /> },
  { text: 'Events', icon: <EventsIcon />, active: true },
  { text: 'Financials', icon: <FinancialsIcon /> },
  { text: 'Gallery', icon: <GalleryIcon /> },
  { text: 'Feedback', icon: <FeedbackIcon /> }
];

const Sidebar = () => (
  <Box sx={{ 
    width: 280,
    bgcolor: '#f4f0fe',
    p: 2,
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '1px 0 5px rgba(0, 0, 0, 0.05)'
  }}>
    <Box sx={{ flexGrow: 1 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            sx={{
              borderRadius: '10px',
              backgroundColor: item.active ? '#fde7fb' : 'transparent',
              mb: 0.5,
              px: 2,
              '&:hover': {
                backgroundColor: '#fbe9ff'
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px', color: item.active ? '#d946ef' : '#6b7280' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: item.active ? '600' : '400',
                color: item.active ? '#d946ef' : '#4b5563'
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Button
      startIcon={<SignOutIcon />}
      sx={{
        textTransform: 'none',
        justifyContent: 'flex-start',
        pl: 2,
        color: '#6b7280',
        fontWeight: 500
      }}
    >
      Sign Out
    </Button>
  </Box>
);

export default Sidebar;
