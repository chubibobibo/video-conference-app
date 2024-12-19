import { RoomModel } from "../models/RoomModel.js";
/** uuid library to give video rooms a unique id */
import { v4 as uuidv4 } from "uuid";

export const roomHandler = (socket) => {
  /** listener for create-room emit */
  socket.on("create-room", async (roomText) => {
    // console.log(roomText);
    console.log("user created the room");
    const roomId = uuidv4(); /** creates a unique roomId */
    // socket.join(roomId); /**joins a user in the created unique room */
    /** save the roomId in the database */
    await RoomModel.create({ roomId: roomId, roomName: roomText });
    /** sends a message back to user */
    /**@emit message will be listened to in RoomSocketContext*/
    socket.emit("room created", { roomId });
  });

  /** listener for peer-join-room */
  socket.on("peer-join-room", async (roomText) => {
    const foundRoom = await RoomModel.findOne({ roomName: roomText });
    socket.emit("peer-joined-room", { foundRoom });
  });

  /** Listener for join-room emit from RoomPage */
  /** will accept the parameter roomId from the RoomPage component*/
  socket.on("join-room", async ({ roomId, peerId, roomName }) => {
    console.log("user joined the room", roomId, peerId, roomName);
    /** Check if a room exist then push the peerId into participants property in RoomModel */
    const room = await RoomModel.findOne({ roomName: roomName });
    if (room) {
      /** access the database using the roomId and push the peerId into the array of participants */
      const foundRoom = await RoomModel.findOneAndUpdate(
        { roomName: roomName },
        { $push: { participants: peerId } },
        { new: true, safe: true, multi: false }
      );
      socket.join(roomId); /** using the id to join  */

      /** sends "user-joined" to every participants of the room */
      /**@peerId object is needed in the "user-joined" listener to call to a specific user */
      socket.to(roomId).emit("user-joined", { peerId });
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
