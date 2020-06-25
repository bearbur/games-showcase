import React from 'react';
import PropTypes from 'prop-types';
import { GamesPresenterListWrapper } from './styled-components/games-presenter-list-styled-components';
import Loading from './loading';
import GameBar from './game-bar';

const GamesPresenterList = ({ games, processing }) => {
  return (
    <GamesPresenterListWrapper>
      {processing && <Loading />}
      {games.map(gameBarInfo => (
        <GameBar key={'gameBar_' + Math.random()} gameBarInfo={gameBarInfo} />
      ))}
    </GamesPresenterListWrapper>
  );
};

export default GamesPresenterList;

GamesPresenterList.propTypes = {
  games: PropTypes.arrayOf,
  processing: PropTypes.bool,
};
