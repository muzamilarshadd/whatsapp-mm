import { roomTypes } from "../../Actiontypes/roomsTypes";
import { RoomsActions, RoomsState } from "../../types/types";

const initialState: RoomsState = {
  pending: false,
  rooms: [],
  error: null
};

const roomsReducer = (state = initialState, action: RoomsActions) => {
  switch (action.type) {
    case roomTypes.FETCH_ROOM_REQUEST:
      return {
        ...state,
        pending: true
      };
    case roomTypes.FETCH_ROOM_SUCCESS:
      return {
        ...state,
        pending: false,
        rooms: action.payload.rooms,
        error: null
      };
    case roomTypes.FETCH_ROOM_FAILURE:
      return {
        ...state,
        pending: false,
        rooms: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

export default roomsReducer;