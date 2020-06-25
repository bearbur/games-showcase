import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  GameBarName,
  GameBarWrapper,
} from './styled-components/game-bar-styled-components';

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
    </GameBarWrapper>
  );
};

export default GameBar;

GameBar.propTypes = {
  gameBarInfo: PropTypes.objectOf,
};
