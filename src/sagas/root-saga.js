import { all } from 'redux-saga/effects';
import restApiWatcher from './rest-api-watcher-saga';

export default function* rootSaga() {
  yield all([restApiWatcher()]);
}
