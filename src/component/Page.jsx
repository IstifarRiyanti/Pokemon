import { useState } from "react"
import Chosen from "./Chosen"
import { TheContent, Image, PokemonName, Button } from "./Other"
import { Pokemons } from "./pokemon.js"
import PokemonList from "./PokemonList"

const fetchPokemons = async (url) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result = await response.json()

    const urls = result.results.map(el => el.url)

    const fetchImage = async (url) => {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }

    const image = urls.map(fetchImage)
    const resultImage = await Promise.all(image)

    const pokemons = resultImage.map(el => ({
        imageUrl: el.sprites.other.dream_world.front_default,
        name: el.name
    }))

    return pokemons
}

const Page = () => {
    const [hasilGambar, sethasilGambar] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg')
    const [hasilNama, sethasilNama] = useState('Nama')
    const [listPokemon, setListPokemon] = useState([]);
    const getData = async () => {
        const response = await fetchPokemons('https://pokeapi.co/api/v2/pokemon')
        setListPokemon(response)
    }

    getData()

    function handleClick(hasilGambar, hasilNama) {
        sethasilGambar(hasilGambar)
        sethasilNama(hasilNama)
    }

    return (
        <> <Chosen >
            < TheContent >
                <Image>{hasilGambar}</Image>
                <PokemonName>{hasilNama}</PokemonName>
            </TheContent>
        </Chosen>
            < PokemonList >
                {listPokemon.map((el) => (
                    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                        <Image>{el.imageUrl}</Image>
                        <PokemonName>{el.name}</PokemonName>
                        <Button><button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={() => handleClick(el.imageUrl, el.name)}>Chose Pokemon</button></Button>
                    </div>
                ))}
            </PokemonList>
        </>
    )
}
export default Page