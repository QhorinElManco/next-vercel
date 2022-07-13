import { FC, ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  console.log(origin);

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
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This page contain information about ${title}`}
        />
        <meta property="og:image" content={`${origin}/banner.png`} />
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
