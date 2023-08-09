import React from "react";
import PokemonPage from "./PokemonPage";
import { useState, useEffect } from "react";
function App() {

  const [pokeCards, setPokeCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokeCards => setPokeCards(pokeCards))
    
  }, [])




  return (
    <div className="App">
      <PokemonPage pokeCards={pokeCards} />
    </div>
  );
}

export default App;
