// in node, this is what IMPORTs look like
// we import the express library
const express = require('express');
// the backend version odf import cors from 'cors'
// we'll also import cors for reasons
const cors = require('cors');

// we will define our port for local development
const port = 3000;

// we create the `app`. whatever that is. (an `app` is a place to define our routes/endpoints)
const app = express();

const pokemon = require('./data.js');
// we do the cors stuff
app.use(cors());

// we define an endpoint on the `/` path. this is our "home" route.
app.get(
    // the first argument is the path of the endpoint
    '/something', 
    // the second argument is a callback.
    (
        // we have access to the REQUEST that was made
        req, 
        // we have a bundle of methods that allow us to make RESPONSES
        res
    ) => {
        // here, i send a response back to the client: Hello world
        res.json({ some: 'thing' });
    }
);

app.get('/pokemon', (req, res) => {
    // do some SQL stuff. 
    // go grab data from somewhere
    // const data =await client.query('SELECT * FROM animals');

    res.json({ results: pokemon });
});

// this is the code to 'launch/spin-up' our server.
app.listen(
    // the first argument is the port we want the server on
    port, 
    // the second argument is a callback. we just use it to log something out.
    () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }
);