export const TheContent = ({ children }) => {
    return (
        <>
            <h2 className="font-bold text-xl mb-2 text-center"> Pokemons </h2>
            {children}
        </>
    );
}

export const Image = ({ children }) => {
    return <img className="my-4 mx-auto h-32" src={children} alt="pokemons" />
}

export const PokemonName = ({ children }) => {
    return <p className="font-bold text-xl mb-2 text-center">{children}</p>
}

export const Button = ({ children }) => {
    return children
}

