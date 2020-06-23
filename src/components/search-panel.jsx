import React from 'react';
import {
  SearchGamesInput,
  SearchPanelWrapper,
  SearchSubmit,
} from './styled-components/search-panel-styled-components';

const SearchPanel = () => {
  const searchInputPlaceholder = 'Please, input name of a game.';
  const searchButtonLabel = 'Search';

  return (
    <SearchPanelWrapper>
      <SearchGamesInput type="input" placeholder={searchInputPlaceholder} />
      <SearchSubmit type="button" value={searchButtonLabel} />
    </SearchPanelWrapper>
  );
};

export default SearchPanel;
