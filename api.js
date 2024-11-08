import axios from 'axios';

const TICKETMASTER_API_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const API_KEY = process.env.REACT_APP_TICKETMASTER_API_KEY;

export const fetchEvents = async (latitudeOrLocation, longitude = null, distance = 50) => {
    try {
        const params = {
          apikey: API_KEY,
          size: 20, // Adjust as needed
          radius: distance,
        };
    
        if (longitude !== null) {
          // Use coordinates for location search
          params.latlong = `${latitudeOrLocation},${longitude}`;
        } else {
          // Use location name for search
          params.keyword = latitudeOrLocation; // Adjust if Ticketmaster expects `city` or `postalCode`
        }
    
        const response = await axios.get(TICKETMASTER_API_URL, { params });
        return response.data._embedded ? response.data._embedded.events : [];
      } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
      }
  };

  export const fetchEventsDisplay = async (latitudeOrLocation, longitude = null, distance = 50) => {
    try {
        const params = {
          apikey: API_KEY,
          size: 8, // Adjust as needed
          radius: distance,
        };
    
        if (longitude !== null) {
          // Use coordinates for location search
          params.latlong = `${latitudeOrLocation},${longitude}`;
        } else {
          // Use location name for search
          params.keyword = latitudeOrLocation; // Adjust if Ticketmaster expects `city` or `postalCode`
        }
    
        const response = await axios.get(TICKETMASTER_API_URL, { params });
        return response.data._embedded ? response.data._embedded.events : [];
      } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
      }
  };
