import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root-saga';
import { gamesReducer } from '../reducers/games-reducer';

const rootReducer = combineReducers({
  gamesReducer,
});

function configureStore(initialState) {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(/* other middleware, */ sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run,
  };
}

const store = configureStore();
store.runSaga(rootSaga);

export default store;
