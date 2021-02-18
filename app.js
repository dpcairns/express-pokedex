// in node, this is what IMPORTs look like
// we import the express library
const express = require('express');
// the backend version odf import cors from 'cors'
// we'll also import cors for reasons
const cors = require('cors');

// we create the `app`. whatever that is. (an `app` is a place to define our routes/endpoints)
const app = express();

// import our pokemon data
// import { pokemon } from './pokemon.js'`
const { pokemon } = require('./data.js');

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
    // const data =await client.query('SELECT * FROM animals';

    console.log('pokemon', pokemon);

    res.json({ results: pokemon });
});

app.get('/pokemon/:id', (req, res) => {
    // do some SQL stuff. 
    // go grab data from somewhere
    // const data =await client.query('SELECT * FROM animals';
    const id = Number(req.params.id);

    const selectedPokemon = pokemon
        .find((poke) => poke.species_id === id);

    res.json({ results: selectedPokemon });
});

module.exports = {
    app
};