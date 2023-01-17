import { twMerge } from "tailwind-merge";

export const Navbar: React.FC = () => {
  return (
    <nav
      className={twMerge(
        "w-full h-20 text-2xl font-bold",
        "flex justify-center items-center"
      )}
    >
      Pokedex
    </nav>
  );
};
