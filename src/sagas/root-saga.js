import restApiWatcher from './rest-api-watcher-saga';

export default function* rootSaga() {
  yield [restApiWatcher()];
}
