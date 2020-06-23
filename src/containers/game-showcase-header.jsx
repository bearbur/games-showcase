import React from 'react';
import { Link } from 'react-router-dom';
import {
  GameShowcaseHeaderWrapper,
  GameShowcaseLogo,
} from './styled-components/games-showcase-styled-components';
import SearchPanel from '../components/search-panel.jsx';

const gameShowCaseTitle = 'SHOW';

const GameShowcaseHeader = () => {
  return (
    <GameShowcaseHeaderWrapper>
      <GameShowcaseLogo>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {gameShowCaseTitle}
        </Link>
      </GameShowcaseLogo>
      <SearchPanel />
    </GameShowcaseHeaderWrapper>
  );
};

export default GameShowcaseHeader;
