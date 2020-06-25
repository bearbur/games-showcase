import {
  httpError,
  httpProcessing,
  httpRequest,
  httpSuccess,
} from '../actions/utils';

export const GAMES = 'GAMES';
export const GAMES_REQUEST = httpRequest(GAMES);
export const GAMES_PROCESSING = httpProcessing(GAMES);
export const GAMES_SUCCESS = httpSuccess(GAMES);
export const GAMES_ERROR = httpError(GAMES);
