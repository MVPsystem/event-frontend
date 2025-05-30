import { useState } from 'react';
import { Button, TextField, Typography, Box, Paper, Link } from '@mui/material';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (isRegistering) {
      if (users[username]) {
        setError('User already exists!');
      } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');
        setIsRegistering(false);
        setError('');
      }
    } else {
      if (users[username] === password) {
        localStorage.setItem('currentUser', username);
        setError('');
        onLogin();
      } else {
        setError('Invalid username or password.');
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={6} sx={{ padding: 4, width: 350 }}>
        <Typography variant="h5" gutterBottom>
          {isRegistering ? 'Register' : 'Login'}
        </Typography>

        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isRegistering ? 'Register' : 'Login'}
          </Button>

          <Box mt={2} textAlign="center">
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError('');
              }}
            >
              {isRegistering
                ? 'Already have an account? Login here'
                : "Don't have an account? Register here"}
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage;