import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetcher} from "../../../utils/http/fetcher.ts";
import {Pokemon} from "../models/pokemon.ts";

const usePokemon = () => {
    const [id, setId] = useState<number>(1);

    const getPokemonQuery = useQuery(
        ["get-pokemon", id],
        async () => await fetcher<Pokemon>(`pokemon/${id}`, "GET")
    );

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
        getPokemonQuery,
        previous,
        next
    }
}

export default usePokemon;