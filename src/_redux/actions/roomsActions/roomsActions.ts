import { roomTypes } from "../../Actiontypes/roomsTypes";
import {
  FetchRoomsRequest,
  FetchRoomsFailure,
  FetchRoomsSuccess,
  FetchRoomsSuccessPayload,
  FetchRoomsFailurePayload
} from "../../types/types";

export const fetchRoomsRequest = (): FetchRoomsRequest => ({
  type: roomTypes.FETCH_ROOM_REQUEST
});

export const fetchRoomsSuccess = (
  payload: FetchRoomsSuccessPayload
): FetchRoomsSuccess => ({
  type: roomTypes.FETCH_ROOM_SUCCESS,
  payload
});

export const fetchRoomsFailure = (
  payload: FetchRoomsFailurePayload
): FetchRoomsFailure => ({
  type: roomTypes.FETCH_ROOM_FAILURE,
  payload
});
