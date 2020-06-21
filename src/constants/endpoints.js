const rawqApiBase = 'https://api.rawg.io/api';

const getGames = `${rawqApiBase}/games`;
const searchGames = `${rawqApiBase}/search`;

export default {
  games: getGames,
  search: searchGames,
};
