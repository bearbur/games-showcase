import React from 'react';
import PropTypes from 'prop-types';
import {
  GamePoster,
  GamePresenterPageWrapper,
} from './styled-components/game-presenter-page-styled-components';
import {
  GameBarLabel,
  GameBarName,
} from './styled-components/game-bar-styled-components';
import GameBarRating from './game-bar-rating';
import GameBarReleaseDate from './game-bar-release-date';
import Loading from './loading';
import GameScreenshots from './game-screenshots';

const GamePresenterPage = ({ gameInfo }) => {
  const webSite = '/';
  const description = 'Some info will be here.';

  return (
    <>
      {!gameInfo.name ? (
        <Loading />
      ) : (
        <GamePresenterPageWrapper>
          <GameBarName>{gameInfo.name}</GameBarName>
          <GamePoster img={gameInfo.background_image} />
          <GameBarRating rating={gameInfo.rating} />
          <GameBarReleaseDate released={gameInfo.released} />
          <GameBarLabel>Description: {description} </GameBarLabel>
          <br />
          <GameBarLabel>
            Official web site: <a href={webSite}>site</a>.{' '}
          </GameBarLabel>
          <br />
          <GameScreenshots screenshots={gameInfo.short_screenshots} />
        </GamePresenterPageWrapper>
      )}
    </>
  );
};

export default GamePresenterPage;

GamePresenterPage.propTypes = {
  gameInfo: PropTypes.objectOf,
};
