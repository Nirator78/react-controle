import axios from "axios";
import { capitalizeFirstLetter } from "../utils/stringConverter";

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
                    nameDisplay: capitalizeFirstLetter(pokemon.name),
                    id,
                    image
                }
            });

            return reformatageDonnee;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Récupère un pokemon par son nom
     * @param string name 
     * @return pokemon
     */
    async getPokemonByName(name) {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);

            const pokemon = response.data;

            return {
                ...pokemon,
                nameDisplay: capitalizeFirstLetter(pokemon.name),
            };
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Récupère une liste de pokemon par son type
     * @param string name 
     * @return pokemon
     */
    async getPokemonByType(type) {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/type/' + type);

            const pokemon = response.data.pokemon;

            const pokemonReformater = pokemon.map(data => {
                const id = this.getId(data.pokemon);

                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                return {
                    ...data.pokemon,
                    nameDisplay: capitalizeFirstLetter(data.pokemon.name),
                    id,
                    image
                }
            });

            return pokemonReformater;
        } catch (e) {
            console.error(e);
        }
    }

}