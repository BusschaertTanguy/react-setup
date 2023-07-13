import {useState} from "react";
import {PokemonDetail} from "./components/pokemon-detail.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetcher} from "../../utils/http/fetcher.ts";
import {Pokemon} from "./models/pokemon.ts";

const Index = () => {
    const [id, setId] = useState<number>(1);

    const {data, isLoading, isError, error} = useQuery(
        ["get-pokemon", id],
        async ({queryKey}) => await fetcher<Pokemon>(`pokemon/${queryKey[1]}`)
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

    if (isError) {
        return <div>{(error as Error).message}</div>;
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!data) {
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
            <button onClick={previous} disabled={id <= 1}>Previous</button>
            <PokemonDetail pokemon={data}/>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default Index;