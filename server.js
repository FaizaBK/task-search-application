const SearchRequest = require('./models/SearchRequest');

const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/search_app')
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Route to retrieve data from an external API
app.get('/api/search/:term', async (req, res) => {
    const term = req.params.term; // Get the search term from the route parameters

    // Store the search request in MongoDB
    await SearchRequest.create({ term });

    // Call the external API
    const response = await fetch(`https://swapi.dev/api/starships/?search=${encodeURIComponent(term)}`); 
    const data = await response.json(); // Parse the JSON response

    res.json(data); // Send the API response back to the client
});

// Endpoint to log search requests to MongoDB
app.post('/api/search-requests', async (req, res) => {
    console.log('Request received:', req.body);
    try {
        const { term } = req.body; 
        if (!term) {
            return res.status(400).json({ message: 'Term not provided' }); // Return an error if no term is provided
        }

        const searchRequest = new SearchRequest({ term });
        await searchRequest.save(); // Save the search request to the database
        
        res.status(201).json({ message: 'Request saved successfully' }); 
    } catch (error) {
        console.error('Error while saving the request:', error); 
        res.status(500).json({ message: 'Error while saving to the database', error: error.message }); 
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});
