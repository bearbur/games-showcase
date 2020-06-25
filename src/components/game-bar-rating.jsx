import React from 'react';
import PropTypes from 'prop-types';
import {
  GameBarRowWrapper,
  GameBarLabel,
} from './styled-components/game-bar-styled-components';

const GameBarRating = ({ rating }) => {
  return (
    <GameBarRowWrapper>
      <GameBarLabel>{`Rating: ${rating}.`}</GameBarLabel>
    </GameBarRowWrapper>
  );
};

export default GameBarRating;

GameBarRating.propTypes = {
  rating: PropTypes.number,
};
