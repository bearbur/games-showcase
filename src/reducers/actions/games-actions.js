import {
  GAMES_ERROR,
  GAMES_PROCESSING,
  GAMES_REQUEST,
  GAMES_SUCCESS,
  GAMES,
} from '../constants/games-constants';
import { httpAction } from './utils';

const initialGamesLoading = (requestConfig = null) => {
  const requestAction = httpAction({
    type: GAMES_REQUEST,
    subType: GAMES,
    requestConfig,
  });
  return requestAction;
};

const processingGamesLoading = () => ({
  type: GAMES_PROCESSING,
});

const successGamesLoading = (data = {}) => ({
  type: GAMES_SUCCESS,
  data,
});

const errorGamesLoading = () => ({
  type: GAMES_ERROR,
});

export const gamesActions = {
  initialGamesLoading,
  processingGamesLoading,
  successGamesLoading,
  errorGamesLoading,
};
