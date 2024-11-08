import React, { useState, useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';
import { fetchEventsDisplay } from '../api'; // Make sure to adjust the path
import './Home.css';

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Function to get the user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  };

  // Fetch events when location is available
  useEffect(() => {
    if (latitude && longitude) {
      setLoading(true);
      setError('');

      // Fetch events based on user's location
      fetchEventsDisplay(latitude, longitude)
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching events:', err);
          setError('Failed to fetch events. Please try again.');
          setLoading(false);
        });
    }
  }, [latitude, longitude]);

  // Run getUserLocation once the component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      <h1>Local Events Near You</h1>

      {loading ? (
        <p>Loading events...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div className="events-list">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.name}</h3>
                <p>Date: {event.dates.start.localDate}</p>
                <p>Location: {event._embedded.venues[0].name}, {event._embedded.venues[0].city.name}</p>
                
                <div className="share-buttons">
                  <FacebookShareButton url={`https://www.ticketmaster.com/event/${event.id}`} quote={event.name}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={`https://www.ticketmaster.com/event/${event.id}`} title={event.name}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={`https://www.ticketmaster.com/event/${event.id}`} title={event.name}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton url={`https://www.ticketmaster.com/event/${event.id}`} title={event.name}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${event._embedded.venues[0].location.latitude},${event._embedded.venues[0].location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-button"
                >
                  Get Directions
                </a>
              </div>
            ))
          ) : (
            <p>No local events found near your location.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;