import { Pokemon } from './decorators/pokemon-class';


const charmander = new Pokemon( 'Charmander');


// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemonToDB( 3 );


charmander.publicApi = 'http://fernando-herrara.com';
console.log( charmander )

