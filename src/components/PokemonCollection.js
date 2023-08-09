import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeCards}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokeCards.map(card => 
        <PokemonCard key={card.id} card={card} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
