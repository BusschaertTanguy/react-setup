import {useEffect, useState} from "react";
import {Pokemon} from "../models/pokemon.ts";
import {getPokemon} from "../http/get-pokemon.ts";

const usePokemon = () => {
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

    return {
        pokemon,
        error,
        previous,
        next
    }
}

export default usePokemon;