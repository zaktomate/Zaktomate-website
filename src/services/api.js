import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'https://zakbot-zaktomate.onrender.com',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});



// Chat API - needed for the demo
export const chatApi = {
  sendMessage: async (message, clientId = 'client_zaktomate', hasSeenGreeting = false) => {
    const response = await api.post('/chat', {
      client_id: clientId,
      message,
      hasSeenGreeting,
    });
    return response.data;
  },
};

// Stats API - for displaying database stats
export const statsApi = {
  getGlobalStats: async () => {
    const response = await api.get('/stats/global');
    return response.data;
  },
};

// Form submission API
export const formApi = {
  submitContact: async (formData) => {
    const response = await axios.post('https://formspree.io/f/mvgrlkvl', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
};


export default api;
