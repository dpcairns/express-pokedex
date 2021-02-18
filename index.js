const { app } = require('./app.js');

// we will define our port for local development
const port = 3000;

// this is the code to 'launch/spin-up' our server.
app.listen(
    // the first argument is the port we want the server on
    port, 
    // the second argument is a callback. we just use it to log something out.
    () => {
        console.log(`Okay, it's running now! And your proof is that you can see this in the terminal. Example app listening at http://localhost:${port}`);
    }
);