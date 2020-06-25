import React from 'react';
import PropTypes from 'prop-types';
import {
  GameScreenshotsWrapper,
  ScreenshotsBar,
} from './styled-components/games-screenshots-styled-components';

const GameScreenshots = ({ screenshots }) => {
  return (
    <GameScreenshotsWrapper>
      {screenshots.map(screenImg => (
        <ScreenshotsBar
          img={screenImg.image}
          key={'ScreenshotsBar' + Math.random()}
        />
      ))}
    </GameScreenshotsWrapper>
  );
};

export default GameScreenshots;

GameScreenshots.propTypes = {
  screenshots: PropTypes.arrayOf,
};
