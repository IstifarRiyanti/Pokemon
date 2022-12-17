import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LocationList from "../component/LocationList"
import { PokemonName } from "../component/Other"

const fetchPokemons = async (url) => {
    const response = await fetch(url)
    const result = await response.json()

    const urls = result.results.map(el => el.url)

    const fetchImage = async (url) => {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }

    const image = urls.map(fetchImage)
    const resultImage = await Promise.all(image)
    return resultImage
}

const Location = () => {
    const [location, setLocation] = useState([]);

    const getData = async () => {
        const response = await fetchPokemons('https://pokeapi.co/api/v2/location-area')
        setLocation(response)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1 className="font-bold text-xl mb-2 text-center p-6">Pokemon Location</h1>
            <LocationList>
                {location.map((el, i) => (
                    <div key={i} className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
                        <PokemonName>{el.name}</PokemonName>
                        <Link to={`/location/${el.id}`}><button className="rounded bg-indigo-500 text-white p-4 w-full" >Chose Pokemon</button></Link>
                    </div>
                ))}
            </LocationList>
        </>
    )
}

export default Location