import React from 'react';
import PropTypes from 'prop-types';
import {
  GameBarRowWrapper,
  GameBarLabel,
} from './styled-components/game-bar-styled-components';

const GameBarReleaseDate = ({ released }) => {
  return (
    <GameBarRowWrapper>
      <GameBarLabel>{`Released: ${released}`}</GameBarLabel>
    </GameBarRowWrapper>
  );
};

export default GameBarReleaseDate;

GameBarReleaseDate.propTypes = {
  released: PropTypes.string,
};
