import React from 'react';
import { GamesWrapper } from './styled-components/games-showcase-styled-components';
import GameShowcase from './games-showcase';

const Games = () => {
  return (
    <GameShowcase>
      <GamesWrapper>
        <div>
          <span>Games</span>
        </div>
      </GamesWrapper>
    </GameShowcase>
  );
};

export default Games;
