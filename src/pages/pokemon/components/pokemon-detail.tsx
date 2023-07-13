import {Pokemon} from "../models/pokemon.ts";

export interface PokemonDetailProps {
    readonly pokemon: Pokemon;
}

export const PokemonDetail = ({pokemon}: PokemonDetailProps) => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img width={200} height={200} src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <div>{pokemon.name}</div>
        </div>
    );
}