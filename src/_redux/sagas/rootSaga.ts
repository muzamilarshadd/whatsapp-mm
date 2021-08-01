import { all, fork } from "redux-saga/effects";
import postsSaga from "./roomsSaga/roomsSaga";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
