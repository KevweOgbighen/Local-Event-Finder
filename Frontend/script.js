const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const requestData = JSON.parse(body);

            if (req.url === '/signup') {
                const command = `java Main signup ${requestData.firstName} ${requestData.lastName} ${requestData.password} ${requestData.email} ${requestData.location} ${requestData.instagram}`;
                
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`);
                        res.writeHead(500);
                        res.end('Internal Server Error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end(stdout);
                    }
                });

            } else if (req.url === '/login') {
                const command = `java Main login ${requestData.email} ${requestData.password}`;
                
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`);
                        res.writeHead(500);
                        res.end('Internal Server Error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end(stdout);
                    }
                });

            } else if (req.url === '/logout') {
                const command = `java Main logout`;

                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error: ${error.message}`);
                        res.writeHead(500);
                        res.end('Internal Server Error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end(stdout);
                    }
                });
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Node.js server running on port 3000');
});





document.getElementById('find').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const location = document.getElementById('location').value; // Get the input value

    try {
        const response = await fetch(`http://localhost:3000/events?location=${encodeURIComponent(location)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        const events = await response.json(); // Assuming the server returns a JSON array

        // Clear previous results
        const eventsContainer = document.getElementById('events-container');
        eventsContainer.innerHTML = '';

        // Check if events were found
        if (events.length > 0) {
            events.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.innerHTML = `<h3>${event.eventName}</h3><p>${event.eventDesc}</p><p>${event.eventDate} at ${event.eventTime}</p>`;
                eventsContainer.appendChild(eventDiv);
            });
        } else {
            eventsContainer.innerHTML = '<p>No events found for this location.</p>';
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        alert('An error occurred while fetching events. Please try again later.');
    }
});



const events = [
    { eventId: 1, eventName: "Taylor Swift", eventDesc: "World Tour", eventDate: "2025-01-19", eventTime: "19:00", venueId: 20, organizerId: 30, venueLocation: "Atlanta" },
    { eventId: 2, eventName: "Beyoncé", eventDesc: "World Tour", eventDate: "2025-02-03", eventTime: "19:00", venueId: 20, organizerId: 30, venueLocation: "Atlanta" },
    { eventId: 3, eventName: "Speed Dating", eventDesc: "Meet someone new!", eventDate: "2025-02-10", eventTime: "19:15", venueId: 24, organizerId: 32, venueLocation: "Miami" },
    { eventId: 4, eventName: "Throwback Dance Party", eventDesc: "Have fun to some 00s hits!", eventDate: "2025-06-17", eventTime: "20:00", venueId: 24, organizerId: 32, venueLocation: "Miami" },
];

// Endpoint to fetch events by location
app.get('/events', (req, res) => {
    const location = req.query.location; // Get the location from the query parameters

    // Filter events based on location
    const matchingEvents = events.filter(event => event.venueLocation.toLowerCase() === location.toLowerCase());

    res.json(matchingEvents); // Send the matching events back as JSON
});

// Start the server (omitted for brevity)
