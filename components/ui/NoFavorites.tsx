import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh-100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "50px"
      }}
    >
      <Text h1>No favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg"
        alt="pokemon"
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};
