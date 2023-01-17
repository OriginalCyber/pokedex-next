import { useRouter } from "next/router";

const PokemonInfoPage = () => {
    const router = useRouter();

    return <div>Pokemon Info page - {router.query.pokemonId}</div>
}
export default PokemonInfoPage;