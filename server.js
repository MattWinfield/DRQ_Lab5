const express = require('express') //Creates a variable of the node REQUIRE Function
const app = express() //Create an Express application and store as a Varaible
const port = 3000 //Define a Port variable

app.get('/', (req, res) => {//Create a Node response to a HTTP Get request at the root Address of localHost, responding with a message
    res.send('Welcome to Data Representation & Querying!')
})


app.listen(port, () => {//Create a Node HTTP Server and Specify the Port to listen with the 'port' Variable
    console.log(`Example app listening at http://localhost:${port}`)
})