import React from 'react';
import PropTypes from 'prop-types';
import { GameShowcaseWrapper } from './styled-components/games-showcase-styled-components';
import GameShowcaseHeader from './game-showcase-header';

const GameShowcase = ({ children }) => {
  return (
    <GameShowcaseWrapper>
      <GameShowcaseHeader />
      {children}
    </GameShowcaseWrapper>
  );
};

export default GameShowcase;

GameShowcase.propTypes = {
  children: PropTypes.func,
};
