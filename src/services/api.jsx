import axios from 'axios';


const API_CONFIG = {
  eventApi: {
    local: 'https://localhost:7087',
    azure: 'https://strugglereventapi-bwbkc7eehkhubbfs.swedencentral-01.azurewebsites.net'
  },
  registrationApi: {
    local: 'https://localhost:5295',
    azure: 'https://strugglerregistrationapi-b0dxhtfddqg2f8c3.swedencentral-01.azurewebsites.net'
  }
};


const isDevelopment = process.env.NODE_ENV === 'development';


const createApiInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
  });

 
  instance.interceptors.response.use(
    response => response,
    error => {
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

export const eventApi = createApiInstance(
  isDevelopment ? API_CONFIG.eventApi.local : API_CONFIG.eventApi.azure
);

export const registrationApi = createApiInstance(
  isDevelopment ? API_CONFIG.registrationApi.local : API_CONFIG.registrationApi.azure
);


export const getEvents = () => eventApi.get('/api/events');
export const getEvent = (id) => eventApi.get(`/api/events/${id}`);


export const getRegistrations = (eventId) =>
  registrationApi.get(`/api/registrations/${eventId}`);
export const createRegistration = (registration) =>
  registrationApi.post('/api/registrations', registration);