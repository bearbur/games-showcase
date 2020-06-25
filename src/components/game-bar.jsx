import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GameBarName,
  GameBarPoster,
  GameBarWrapper,
} from './styled-components/game-bar-styled-components';
import GameBarReleaseDate from './game-bar-release-date';
import GameBarRating from './game-bar-rating';

const GameBar = ({ gameBarInfo }) => {
  const [gameSlug, setGameSlug] = useState(null);

  const handleOpenGamePage = () => {
    setGameSlug(gameBarInfo.slug);
  };

  if (gameSlug) {
    return <Redirect to={`/game?game=${gameSlug}`} />;
  }

  return (
    <GameBarWrapper onClick={handleOpenGamePage}>
      <GameBarName>{gameBarInfo.name}</GameBarName>
      <GameBarPoster img={gameBarInfo.background_image} />
      <GameBarRating
        rating={gameBarInfo.rating}
        ratingTop={gameBarInfo.rating_top}
      />
      <GameBarReleaseDate released={gameBarInfo.released} />
    </GameBarWrapper>
  );
};

export default GameBar;

GameBar.propTypes = {
  gameBarInfo: PropTypes.objectOf,
};
