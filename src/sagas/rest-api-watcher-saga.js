import { takeEvery } from 'redux-saga/effects';
import { HTTP_REQUEST } from '../reducers/actions/utils';

export function* handleRequest(action) {
  // eslint-disable-next-line no-console
  yield console.log(action);
}

/**
 * @return saga  watching http-requests
 */

export default function* restApiWatcher() {
  yield takeEvery(action => action[HTTP_REQUEST], handleRequest);
}
