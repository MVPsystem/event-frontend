import axios from 'axios';


const API_CONFIG = {
  eventApi: {
    local: 'https://localhost:7087/api',
    azure: 'https://strugglereventapi-bwbkc7eehkhubbfs.swedencentral-01.azurewebsites.net/api'
  },
  registrationApi: {
    local: 'https://localhost:5295/api',
    azure: 'https://strugglerregistrationapi-b0dxhtfddqg2f8c3.swedencentral-01.azurewebsites.net/api'
  }
};


const createApiInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
  });


  instance.interceptors.response.use(
    response => {
      console.log('API Success:', response.config.url);
      return response;
    },
    error => {
      console.error('API Error:', error.config?.url, error.response?.status);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return instance;
};


const isLocal = window.location.hostname === 'localhost';
export const eventApi = createApiInstance(isLocal ? API_CONFIG.eventApi.local : API_CONFIG.eventApi.azure);
export const registrationApi = createApiInstance(isLocal ? API_CONFIG.registrationApi.local : API_CONFIG.registrationApi.azure);


export const getEvents = () => eventApi.get('/events');
export const getEvent = (id) => eventApi.get(`/events/${id}`);


export const getRegistrations = (eventId) => registrationApi.get(`/registrations?eventId=${eventId}`);
export const createRegistration = (data) => registrationApi.post('/registrations', data);