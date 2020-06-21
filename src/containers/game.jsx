import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { GameShowcaseWrapper } from './styled-components/games-showcase-styled-components';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Game = () => {
  const query = useQuery();

  const gameSlug = query.get('game');

  if (gameSlug === null) {
    return <Redirect to="/" />;
  }

  // todo find in games by gameSlug

  return (
    <GameShowcaseWrapper>
      <div>
        <span>game</span>
      </div>
    </GameShowcaseWrapper>
  );
};

export default Game;
