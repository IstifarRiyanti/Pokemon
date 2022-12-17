import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TheContent, Image, PokemonName, Button } from "../component/Other"
import Chosen from '../component/Chosen'
import PokemonList from '../component/PokemonList'

let mapName;

const fetchPokemons = async (url) => {
    const response = await fetch(url)
    const result = await response.json()

    mapName = result.Name

    const urls = result.pokemon_encounters.map(el => el.pokemon.url)

    const fetchImage = async (url) => {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }

    const image = urls.map(fetchImage)
    const resultImage = await Promise.all(image)
    return resultImage
}

const Pokemons = () => {
    const [hasilGambar, sethasilGambar] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg')
    const [hasilNama, sethasilNama] = useState('No Chosen Pokemon');
    const [encounter, setEncounter] = useState([]);
    const { id } = useParams()

    const getData = async (url) => {
        const response = await fetchPokemons(url)
        setEncounter(response)
    }

    useEffect(() => {
        getData(`https://pokeapi.co/api/v2/location-area/${id}`)
    }, [id])

    function handleClick(hasilGambar, hasilNama) {
        sethasilGambar(hasilGambar)
        sethasilNama(hasilNama)
    }

    return (
        <> <Chosen>
            < TheContent >
                <Image>{hasilGambar}</Image>
                <PokemonName>{hasilNama}</PokemonName>
            </TheContent>
        </Chosen>
            < PokemonList >
                {encounter.map((el) => (
                    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                        <Image>{el.sprites.other.dream_world.front_default}</Image>
                        <PokemonName>{el.name}</PokemonName>
                        <Button><button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={() => handleClick(el.sprites.other.dream_world.front_default, el.name)}>Chose Pokemon</button></Button>
                    </div>
                ))}
            </PokemonList>
        </>
    )
}

export default Pokemons