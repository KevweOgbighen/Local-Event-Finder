document.getElementById('location-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get the user input
    const location = document.getElementById('location').value;

    try {
        // Fetch events from the server
        const response = await fetch('http://localhost:3000/get-events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location: location })
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }

        const events = await response.json();

        // Clear the previous results
        const eventsContainer = document.getElementById('events');
        eventsContainer.innerHTML = '';

        // Check if no events were found
        if (events.message) {
            eventsContainer.innerHTML = `<p>${events.message}</p>`;
        } else {
            // Display each event
            events.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerHTML = `
                    <h3>${event.eventname}</h3>
                    <p>${event.eventdesc}</p>
                    <p>${event.eventdate} at ${event.eventtime}</p>
                    <p>Location: ${event.venuelocation}</p>
                `;
                eventsContainer.appendChild(eventDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        alert('An error occurred while fetching events. Please try again.');
    }
});
