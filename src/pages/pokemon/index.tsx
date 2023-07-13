import {PokemonDetail} from "./components/pokemon-detail.tsx";
import usePokemon from "./hooks/usePokemon.ts";

const Index = () => {
    const {getPokemonQuery, previous, next} = usePokemon();
    const {data: pokemon, isLoading, isError, error} = getPokemonQuery;

    if (isError) {
        return <div>{(error as Error).message}</div>;
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!pokemon) {
        return <div>Pokemon not found</div>
    }

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <button onClick={previous} disabled={pokemon.id <= 1}>Previous</button>
            <PokemonDetail pokemon={pokemon}/>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default Index;