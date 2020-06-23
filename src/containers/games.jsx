import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GamesWrapper } from './styled-components/games-showcase-styled-components';
import GameShowcase from './games-showcase';
import { gamesSelector } from '../reducers/games-reducer';
import { gamesActions } from '../reducers/actions/games-actions';

const mapStateToProps = state => ({
  games: gamesSelector(state),
});

const mapDispatchToProps = dispatch => {
  return {
    initialGamesLoading: requestConfig =>
      dispatch(gamesActions.initialGamesLoading(requestConfig)),
  };
};

const Games = ({ games, initialGamesLoading }) => {
  useEffect(() => {
    if (Object.values(games).length === 0) {
      initialGamesLoading();
    }
  });

  return (
    <GameShowcase>
      <GamesWrapper>
        <div>
          <span>Games</span>
        </div>
      </GamesWrapper>
    </GameShowcase>
  );
};

Games.propTypes = {
  games: PropTypes.objectOf.isRequired,
  initialGamesLoading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
