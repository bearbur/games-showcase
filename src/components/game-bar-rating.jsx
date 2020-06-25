import React from 'react';
import PropTypes from 'prop-types';
import {
  GameBarRowWrapper,
  GameBarLabel,
} from './styled-components/game-bar-styled-components';

const GameBarRating = ({ rating, ratingTop }) => {
  return (
    <GameBarRowWrapper>
      <GameBarLabel>{`Rating: ${rating}/${ratingTop}`}</GameBarLabel>
    </GameBarRowWrapper>
  );
};

export default GameBarRating;

GameBarRating.propTypes = {
  rating: PropTypes.number,
  ratingTop: PropTypes.number,
};
