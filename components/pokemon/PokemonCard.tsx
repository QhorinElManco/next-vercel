import React, { FC } from "react";
import { useRouter } from "next/router";

import { Card, Row, Text, Button } from "@nextui-org/react";

import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  return (
    <Card
      css={{ 
        maxHeight: "350px",
        border: "1px solid",
      }}
      isHoverable
      isPressable
      onClick={onClick}
    >
      <Card.Body>
        <Card.Image
          src={pokemon.image}
          objectFit="contain"
          width="100%"
          height="100%"
          alt={`${pokemon.name}`}
          autoResize
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray500",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="space-between">
          <Text h5 color="white" transform="capitalize">
            {pokemon.name}
          </Text>
          <Text h5>{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
