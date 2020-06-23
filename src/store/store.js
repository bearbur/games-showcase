import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root-saga';
import { gamesReducer } from '../reducers/games-reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

export default store;
