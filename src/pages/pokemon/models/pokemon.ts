export interface PokemonSprites {
    readonly front_default: string;
}

export interface Pokemon {
    readonly id: number;
    readonly name: string;
    readonly sprites: PokemonSprites;
}