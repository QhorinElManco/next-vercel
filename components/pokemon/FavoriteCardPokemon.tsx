import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
      onClick={() => onFavoriteClicked(pokemonId)}
    >
      <Card isHoverable isPressable>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          objectFit="contain"
          width="100%"
          height="100%"
          alt={`${pokemonId}`}
          autoResize
        />
      </Card>
    </Grid>
  );
};
