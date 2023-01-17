import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./Navbar";

type PokedexLayoutProps = {
  children?: ReactNode;
};

export const PokedexLayout: React.FC<PokedexLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col justify-center items-center",
        "max-w-screen-lg mx-auto"
      )}
    >
      <Navbar />
      {children}
    </main>
  );
};
