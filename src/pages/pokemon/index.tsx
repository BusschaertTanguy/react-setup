import {useEffect, useState} from "react";
import {Pokemon} from "./models/pokemon.ts";
import {getPokemon} from "./http/get-pokemon.ts";
import {PokemonDetail} from "./components/pokemon-detail.tsx";

const Index = () => {
    const [id, setId] = useState<number>(1);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPokemon(id)
            .then(pokemon => setPokemon(pokemon))
            .catch((error: string) => setError(error));
    }, [id]);

    const previous = () => {
        setId(prev => {
            if (prev <= 1) {
                return prev;
            }

            return prev - 1;
        })
    }

    const next = () => {
        setId(prev => prev + 1);
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!pokemon) {
        return <div>Loading ...</div>;
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
            <button onClick={previous} disabled={id <= 1}>Previous</button>
            <PokemonDetail pokemon={pokemon}/>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default Index;