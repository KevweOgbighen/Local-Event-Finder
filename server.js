const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Grad2021', // Replace with your MySQL password
    database: 'localEventFinder', 
});

app.post('/get-events', (req, res) => {
    const userLocation = req.body.location;

    // SQL query to fetch events where the venue location matches user input
    const query = `
        SELECT event.eventname, event.eventdesc, event.eventdate, event.eventtime, venue.venuelocation 
        FROM event 
        JOIN venue ON event.venueid = venue.venueid 
        WHERE venue.venuelocation = ?`;


    pool.query(query, [userLocation], (err, results) => {
        if (err) {
            console.error('Error fetching events by location:', err);
            res.status(500).json({ error: 'Database error' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No events found in this location.' });
        } else {
            res.json(results); // Send the matching events to the frontend
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
