import { combineReducers } from "redux";
import postReducer from "./roomsReducer/roomsReducer";

const rootReducer = combineReducers({
  rooms: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;