// importing our app and endpoints
const { app } = require('../app.js');
const { pokemon } = require('../data.js');
// importing the test version of superagent
const supertest = require('supertest');
// making a special request function for our test
// this function is what we'll use to make test requests to our endpoints
const request = supertest(app);

// define our expectation
it('should respond with all pokemon', 
    // second argument is a callback
    // it is an ASYNC callback
    // we also get this 'done' thing. we just need to call it at the end of our tests to clean up
    async(done) => {
        const expectation = {
            // our endpoint definition in app.js has a 'results' property. so we set our exdpectations accordingly
            results: pokemon
        };

        // client is talking to the server
        // we are hitting our endpoint and getting a response
        const response = await request.get('/pokemon');

        // expect the status to be 200
        expect(response.status).toBe(200);
        // expect the response to have the right stuff in it
        expect(response.body).toEqual(expectation);
        // we call our weird cleanup function
        done();
    });

// define our expectation
it('should respond with the selected pokemon', 
    // second argument is a callback
    // it is an ASYNC callback
    // we also get this 'done' thing. we just need to call it at the end of our tests to clean up
    async(done) => {
        const expectation = {
            // our endpoint definition in app.js has a 'results' property. so we set our exdpectations accordingly
            results: {
                _id: '5cef3501ef6005a77cd4fd17',
                pokemon: 'bulbasaur',
                id: 1,
                species_id: 1,
                height: 7,
                weight: 69,
                base_experience: 64,
                type_1: 'grass',
                type_2: 'poison',
                attack: 49,
                defense: 49,
                hp: 45,
                special_attack: 65,
                special_defense: 65,
                speed: 45,
                ability_1: 'overgrow',
                ability_2: 'NA',
                ability_hidden: 'chlorophyll',
                color_1: '#78C850',
                color_2: '#A040A0',
                color_f: '#81A763',
                egg_group_1: 'monster',
                egg_group_2: 'plant',
                url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
                generation_id: 1,
                evolves_from_species_id: 'NA',
                evolution_chain_id: 1,
                shape_id: 8,
                shape: 'quadruped',
                pokebase: 'bulbasaur',
                pokedex: 'http://www.pokemon.com/us/pokedex/bulbasaur'
            }
        };

        // client is talking to the server
        // we are hitting our endpoint and getting a response
        const response = await request.get('/pokemon/1');
        // expect the status to be 200
        expect(response.status).toBe(200);
        // expect the response to have the right stuff in it
        expect(response.body).toEqual(expectation);
        // we call our weird cleanup function
        done();
    });