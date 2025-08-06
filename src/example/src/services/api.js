import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Chat API - needed for the demo
export const chatApi = {
  sendMessage: async (message, clientId = 'client_zaktomate', hasSeenGreeting = false) => {
    const response = await api.post('/api/chat', {
      client_id: clientId,
      message,
      hasSeenGreeting,
    });
    return response.data;
  },
};

// Stats API - for displaying MongoDB database stats
export const statsApi = {
  getGlobalStats: async () => {
    console.log('🌐 DEBUG: Making API call to /api/stats/global');
    console.log('🌐 DEBUG: API baseURL:', api.defaults.baseURL);
    const response = await api.get('/api/stats/global');
    console.log('🌐 DEBUG: API response received:', response.data);
    return response.data;
  },
};

export default api;
