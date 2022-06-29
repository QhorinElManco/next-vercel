import { FC, ReactNode } from "react";

import { Grid } from "@nextui-org/react";

import { PokemonCard } from "./PokemonCard";

import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2}>
      {pokemons.map((pokemon) => (
        <Grid xs={6} sm={4} md={3} lg={2} xl={1} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
