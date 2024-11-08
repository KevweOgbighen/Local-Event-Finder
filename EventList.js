import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';
import { fetchEvents } from '../api'; // Adjust the path if needed

function EventList() {
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState(50);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to get user location when the button is pressed
  const getUserLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      setError('');

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const data = await fetchEvents(latitude, longitude, distance);
            setEvents(data);
          } catch (err) {
            console.error('Error fetching events:', err);
            setError('Failed to fetch events. Please try again.');
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  // Handle manual search by location input
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchEvents(location, null, distance);
      setEvents(data);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to fetch events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '25px'}}>
            <h2>Find Events</h2>
        </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <button onClick={getUserLocation} className="event-button">Use My Current Location</button>
    </div>    
        <br></br>
      <form onSubmit={handleFormSubmit}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleInputChange}
          required
        />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <input
          type="number"
          placeholder="Enter distance (miles)"
          value={distance}
          onChange={handleDistanceChange}
          required
        />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button type="submit" className="event-button">Search</button>
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div className="events-list">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.name}</h3>
                <p>{event.dates.start.localDate}</p>
                <p>{event.dates.start.localTime}</p>
                <p>{event._embedded.venues[0].name}, {event._embedded.venues[0].city.name}</p>

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
            <p>No events found in this area.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default EventList;