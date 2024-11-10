const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// enable CORS to allow cross-origin requests
const cors = require('cors');
app.use(cors());

// middleware to parse JSON data in requests
app.use(express.json());  // Built-in middleware to parse JSON

// CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// route to get a list of movies
app.get('/api/movies', (req, res) => {
    const myMovies = [ // array of movie objects
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies }); // respond with the movies as JSON
});

app.post('/api/movies', (req, res) => {
    const movie = req.body;
    // Save the movie data or just respond with it
    res.status(201).json(movie);  // Example response
});


// middleware for parsing URL-encoded data and JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});