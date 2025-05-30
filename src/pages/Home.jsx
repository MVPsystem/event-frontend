import {
  Box,
  Container,
  Button,
  ButtonGroup,
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Search, FilterList, GridView, List as ListIcon } from '@mui/icons-material';
import EventList from '../components/EventList';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ ml: '280px', py: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <ButtonGroup sx={{ flexWrap: 'nowrap' }}>
          <Button variant="contained">Active</Button>
          <Button variant="outlined">Draft</Button>
          <Button variant="outlined">Past</Button>
        </ButtonGroup>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            size="small"
            placeholder="Search events..."
            sx={{ minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <IconButton>
            <FilterList />
          </IconButton>

          <Button variant="outlined">All Category</Button>

          <Button variant="outlined">This Month</Button>

          <ButtonGroup>
            <Button variant="outlined">
              <GridView />
            </Button>
            <Button variant="contained">
              <ListIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>

      <EventList />
    </Container>
  );
};

export default Home;
