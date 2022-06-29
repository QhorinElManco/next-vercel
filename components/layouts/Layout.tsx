import { FC, ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon app"}</title>
        <meta name="author" content="Maynor Pineda" />
        <meta
          name="description"
          content={`Information about Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
