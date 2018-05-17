export const fetchAllPokemon = () => {
  console.log('api utils fetchAllPokemon');
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};
