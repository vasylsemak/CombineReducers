import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import roomsReducer from "./rooms-reducer";

//Keeping these constants in this file because the specs are importing them from here
export const AUTHENTICATED = 'AUTHENTICATED';
export const GOT_ROOMS = 'GOT_ROOMS';
export const BOOK_ROOM = 'BOOK_ROOM';

const reducer = combineReducers({
  user: userReducer,
  rooms: roomsReducer
});

export default reducer;
