import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
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

    const successResponse = yield axios({
      method: requestConfig.method,
      url: requestConfig.url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: requestConfig.data ? JSON.stringify(requestConfig.data) : null,
      params: requestConfig.params ? requestConfig.params : null,
    });

    const responseData = yield successResponse.data;

    yield put({ type: httpSuccess(subType), data: responseData });
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
