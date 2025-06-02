import axios from 'axios';

const API_CONFIG = {
  eventApi: 'https://strugglereventapi-bwbkc7eehkhubbfs.swedencentral-01.azurewebsites.net',
  registrationApi: 'https://strugglerregistrationapi-b0dxhtfddqg2f8c3.swedencentral-01.azurewebsites.net'
};

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

export const eventApi = createApiInstance(API_CONFIG.eventApi);
export const registrationApi = createApiInstance(API_CONFIG.registrationApi);

export const getEvents = () => eventApi.get('/api/events');
export const getEvent = (id) => eventApi.get(`/api/events/${id}`);

export const getRegistrations = (eventId) => registrationApi.get(`/api/registrations/${eventId}`);
export const createRegistration = (registration) => registrationApi.post('/api/registrations', registration);
