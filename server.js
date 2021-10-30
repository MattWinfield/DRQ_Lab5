const express = require('express') //Creates a variable of the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const port = 3000 //Define a Port variable

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Welcome to Data Representation & Querying!')
})

app.get('/hello/:name', (req, res) => {//Create another Node response to a HTTP Get request at the /hello Address of localHost, responding with a message
    res.send('Hello ' + req.params.name)
})

app.get('/api/movies', (req, res) => {//Create another Node response to a HTTP Get request at the /api/movies Address of localHost, responding with JSON Data
    const myMovies =//Create a variabe to store the Json Data
    {
        "movies": [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
        ]
    }
    res.json({ movies: myMovies })//Respond with Json Data
})

app.listen(port, () => {//Create a Node HTTP Server and Specify the Port to listen with the 'port' Variable
    console.log(`Example app listening at http://localhost:${port}`)
})