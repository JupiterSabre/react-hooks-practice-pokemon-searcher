import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState } from "react";


function PokemonPage({pokeCards}) {


//SEARCH BAR: SET STATE AND FUNCTIONALITY FOR FILTERING SEARCH QUERIES
  const [searchTerm, setSearchTerm] = useState("")
  const filterPoke = pokeCards.filter((pokeCard) => {
    return pokeCard.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokeCards={filterPoke} />
    </Container>
  );
}

export default PokemonPage;
