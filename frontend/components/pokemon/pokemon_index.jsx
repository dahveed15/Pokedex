import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.pokemon.map((poke) =>
                <div>
                  <li>{poke.name}</li>
                  <li><img src={poke.img_url} /></li>
                </div>
            )
          }
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
