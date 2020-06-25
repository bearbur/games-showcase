import { takeEvery, put } from 'redux-saga/effects';
import {
  HTTP_REQUEST,
  httpError,
  httpProcessing,
  httpSuccess,
} from '../reducers/actions/utils';

export function* handleRequest(action) {
  const { subType } = action;

  try {
    const { requestConfig } = action;

    yield put({ type: httpProcessing(subType) });

    const successResponse = yield fetch(requestConfig.url, {
      method: requestConfig.method,
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestConfig.data ? JSON.stringify(requestConfig.data) : null,
    });

    const parsedResponse = yield successResponse.json();

    yield put({ type: httpSuccess(subType), data: parsedResponse });
  } catch (e) {
    if (!subType) {
      // eslint-disable-next-line
      console.error('Action without subType!');
      return;
    }

    yield put({ type: httpError(subType) });

    // eslint-disable-next-line
    console.error('Error on saga.', e);
  }
}

/**
 * @return saga  watching http-requests
 */

export default function* restApiWatcher() {
  yield takeEvery(action => action[HTTP_REQUEST], handleRequest);
}
