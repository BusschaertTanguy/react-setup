import {Pokemon} from "../models/pokemon.ts";
import {fetcher} from "../../../utils/http/fetcher.ts";

export const getPokemon = (id: number) => {
    return fetcher<Pokemon>(`pokemon/${id}`);
}