import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import GameShowcase from './games-showcase';
import { GameWrapper } from './styled-components/games-showcase-styled-components';
import { gamesSelector } from '../reducers/games-reducer';
import GamePresenterPage from '../components/game-presenter-page';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const mapStateToProps = state => {
  return {
    games: gamesSelector(state),
  };
};

const Game = ({ games }) => {
  const query = useQuery();
  const gameSlug = query.get('game');

  const [slug, setSlug] = useState(null);
  const [gameInfo, setGameInfo] = useState({});

  useEffect(() => {
    setSlug(gameSlug);
  }, [gameSlug]);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const gameInfoFromGames = games.find(game => game.slug === slug);

    if (!gameInfoFromGames) {
      // todo return if game search by slug is processing

      // todo action for loading game by slug

      return;
    }

    // todo load all game data by game id (description, site, etc.)

    setGameInfo(gameInfoFromGames);
  }, [slug]);

  if (gameSlug === null) {
    return <Redirect to="/" />;
  }

  return (
    <GameShowcase>
      <GameWrapper>
        <GamePresenterPage gameInfo={gameInfo} />
      </GameWrapper>
    </GameShowcase>
  );
};

export default connect(mapStateToProps, null)(Game);

Game.propTypes = {
  games: PropTypes.arrayOf,
};
