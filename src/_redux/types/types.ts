import { Room } from "../../../models/Room";
import { roomTypes } from "../Actiontypes/roomsTypes";
  
export interface RoomsState {
  pending: boolean;
  rooms: Room[];
  error: string | null;
}

export interface FetchRoomsSuccessPayload {
  rooms: Room[];
}

export interface FetchRoomsFailurePayload {
  error: string;
}

export interface FetchRoomsRequest {
  type: typeof roomTypes.FETCH_ROOM_REQUEST;
}

export type FetchRoomsSuccess = {
  type: typeof roomTypes.FETCH_ROOM_SUCCESS;
  payload: FetchRoomsSuccessPayload;
};

export type FetchRoomsFailure = {
  type: typeof roomTypes.FETCH_ROOM_FAILURE;
  payload: FetchRoomsFailurePayload;
};

export type RoomsActions =
  | FetchRoomsRequest
  | FetchRoomsSuccess
  | FetchRoomsFailure;
