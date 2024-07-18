import { RoomModel } from "../models/RoomModel.js";
/** uuid library to give video rooms a unique id */
import { v4 as uuidv4 } from "uuid";

export const roomHandler = (socket) => {
  /** listener for create-room emit */
  socket.on("create-room", async () => {
    console.log("user created the room");
    const roomId = uuidv4(); /** creates a unique roomId */
    // socket.join(roomId); /**joins a user in the created unique room */
    /** save the roomId in the database */
    await RoomModel.create({ roomId: roomId });
    /** sends a message back to user */
    /**@emit message will be listened to in RoomSocketContext*/
    socket.emit("room created", { roomId });
  });

  /** Listener for join-room emit */
  /** will accept the parameter roomId from the RoomPage component*/
  socket.on("join-room", async ({ roomId, peerId }) => {
    console.log("user joined the room", roomId, peerId);
    /** Check if a room exist then push the peerId into participants property in RoomModel */
    const room = await RoomModel.findOne({ roomId: roomId });
    if (room) {
      /** access the database using the roomId and push the peerId into the array of participants */
      const foundRoom = await RoomModel.findOneAndUpdate(
        { roomId: roomId },
        { $push: { participants: peerId } },
        { new: true }
      );
      socket.join(roomId); /** using the id to join  */
      /** emit get-users containing the roomId and the participants which is an array of all the id's */
      socket.emit("get-users", {
        roomId,
        participants: foundRoom.participants,
      });
    }
    /** listens for 'disconnect' when a user closes a tab or browser, executes callback to search for the specific room using the roomId */
    /** update the room found by pulling the peerId in the participants array*/
    socket.on("disconnect", async () => {
      console.log("user left the room", peerId);
      await RoomModel.findOneAndUpdate(
        { roomId: roomId },
        { $pull: { participants: peerId } },
        {
          safe: true,
          multi: false,
        } /** ensure safe updates and affect only one document. */
      );
      /** emits user-disconnected to all other sockets in the same room (roomId) */
      socket.to(roomId).emit("user-disconnected", peerId);
    });
  });
};
