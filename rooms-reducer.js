export const GOT_ROOMS = "GOT_ROOMS";
export const BOOK_ROOM = 'BOOK_ROOM';

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ROOMS:
      return action.payload;
    case BOOK_ROOM:
      const updatedRooms = state.map(room => {
        if (room.id === action.roomId) {
          return { ...room, booked: true };
        } else {
          return room;
        }
      });
      return updatedRooms;
    default:
      return state;
  }
}

export default roomsReducer;
