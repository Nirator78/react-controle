import axios from "axios";

export class PokeApi {

    /**
     * Get id from url Pokemon
     * @param pokemon
     * @returns string
     */
    getId(pokemon) {
        const {url} = pokemon;

        const arrayStringUrl = url.split('/');

        const id = arrayStringUrl[arrayStringUrl.length - 2];

        return id;
    }

    async getAllPokemon() {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1118');

            const reformatageDonnee = response.data.results.map(pokemon => {
                const id = this.getId(pokemon);

                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                return {
                    ...pokemon,
                    id,
                    image
                }
            });

            return reformatageDonnee;
        } catch (e) {
            console.error(e);
        }
    }

    async getPokemonByName(name) {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);

            const pokemon = response.data;

            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

            Object.assign(pokemon, {image});

            return pokemon;
        } catch (e) {
            console.error(e);
        }
    }

}