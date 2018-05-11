import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
        <div>
          <Link to={`/pokemon/${pokemon.id}`}>
            <li>{pokemon.name}</li>
            <img src={pokemon.image_url} />
          </Link>
        </div>
);

export default PokemonIndexItem;
