import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type PokemonCardProps = {
  pokemonInfo: any;
};

export const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemonInfo } = props;

  const [info, setInfo] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    const result = await fetch(pokemonInfo.url);
    const data = await result.json();
    setInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemonInfo]);

  return (
    <Link
      href={`pokedex/${info?.id}`}
      className={twMerge(
        "w-40 text-center p-4 mx-auto",
        "cursor-pointer shadow-xl rounded-xl",
        "border border-black border-opacity-5",
        "relative overflow-hidden"
      )}
    >
      <div className="w-full h-28 relative">
        {info && (
          <Image
            src={info.sprites.other["official-artwork"].front_default}
            alt="avatar"
            className="mx-auto"
            width={112}
            height={112}
            priority
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <div className="text-lg font-semibold capitalize">{pokemonInfo.name}</div>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="lds-ring ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </Link>
  );
};
