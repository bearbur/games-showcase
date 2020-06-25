import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GamesWrapper } from './styled-components/games-showcase-styled-components';
import GameShowcase from './games-showcase';
import {
  gamesProcessingSelector,
  gamesSelector,
} from '../reducers/games-reducer';
import { gamesActions } from '../reducers/actions/games-actions';
import endpoints from '../constants/endpoints';
import GamesPresenterList from '../components/games-presenter-list';
import GamesFiltration from '../components/games-filtration';
import GamesPagination from '../components/games-pagination';

const mapStateToProps = state => ({
  games: gamesSelector(state),
  gamesProcessing: gamesProcessingSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    initialGamesLoading: requestConfig =>
      dispatch(gamesActions.initialGamesLoading(requestConfig)),
  };
};

const Games = ({ games, gamesProcessing, initialGamesLoading }) => {
  useEffect(() => {
    if (games.length === 0 && !gamesProcessing) {
      initialGamesLoading({
        url: endpoints.games,
        method: 'get',
        data: null,
      });
    }
  });

  return (
    <GameShowcase>
      <GamesWrapper>
        <GamesFiltration />
        <GamesPresenterList games={games} processing={gamesProcessing} />
        <GamesPagination />
      </GamesWrapper>
    </GameShowcase>
  );
};

Games.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  gamesProcessing: PropTypes.bool.isRequired,
  initialGamesLoading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
