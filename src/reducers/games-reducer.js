import {
  GAMES_ERROR,
  GAMES_PROCESSING,
  GAMES_REQUEST,
  GAMES_SUCCESS,
} from './constants/games-constants';

const initialGameState = {
  data: {},
  processing: false,
  error: false,
};

export function gamesReducer(state = initialGameState, action) {
  switch (action.type) {
    case GAMES_REQUEST:
      return initialGameState;
    case GAMES_PROCESSING:
      return {
        ...state,
        processing: true,
      };
    case GAMES_SUCCESS:
      return {
        ...state,
        processing: false,
        data: action.data,
      };
    case GAMES_ERROR: {
      return {
        ...state,
        processing: false,
        error: true,
      };
    }
    default:
      return state;
  }
}

export const gamesSelector = state =>
  state.games.data.results ? state.games.data.results : [];
export const gamesProcessingSelector = state => state.games.processing;
