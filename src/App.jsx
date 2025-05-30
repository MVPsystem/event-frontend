import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress, Box } from '@mui/material';

import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import LoginPage from './LoginPage';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f6fb',
      paper: '#ffffff',
    },
    primary: {
      main: '#d946ef',
    },
    secondary: {
      main: '#7c3aed',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isLoggedIn ? (
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onLogout={handleLogout} />
            <div style={{ display: 'flex', flex: 1 }}>
              <Sidebar />
              <main style={{ flex: 1, padding: '1.5rem', backgroundColor: theme.palette.background.default }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/event/:id" element={<EventDetail />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;