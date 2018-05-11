import React from 'react';

const PokemonIndexItem = ({pokemon}) => (
      <div>
        <li>{pokemon.name}</li>
        <img src={pokemon.image_url} />
      </div>
);

export default PokemonIndexItem;
