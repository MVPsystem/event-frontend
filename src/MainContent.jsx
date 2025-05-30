import { Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';

function MainContent({ onLogout }) {
  return (
    <>
      <Button onClick={onLogout} variant="outlined" color="secondary" style={{ marginBottom: '1rem' }}>
        Logout
      </Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default MainContent;
