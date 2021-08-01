import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Room } from "../../../../models/Room";
import {
  fetchRoomsFailure,
  fetchRoomsSuccess
} from "../../actions/roomsActions/roomsActions";
import { roomTypes } from "../../Actiontypes/roomsTypes";

const getPosts = () =>
  axios.get<Room[]>("https://run.mocky.io/v3/49e0d63c-4c67-450a-8ae9-2badcc557421");

function* fetchPostsSaga() {
  try {
      const response = yield call(getPosts);
    yield put(
        fetchRoomsSuccess({
          rooms: response.data
        })
    );
  } catch (e) {
    yield put(
        fetchRoomsFailure({
          error: e.message
        })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(roomTypes.FETCH_ROOM_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
