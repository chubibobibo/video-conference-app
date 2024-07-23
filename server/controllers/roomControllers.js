import "express-async-errors";
import { RoomModel } from "../models/RoomModel.js";
import { ExpressError } from "../ExpressError/ExpressError.js";

export const addRoom = async (req, res) => {
  if (!req.body) {
    throw new ExpressError("No data provided", 400);
  }

  const newRoom = await RoomModel.create({ roomName: req.body.roomName });
  if (!newRoom) {
    throw new ExpressError("room cannot be created", 400);
  }
  res.status(200).json({ message: `${newRoom.roomName} created` });
};

/** Note: used findOne to query the database for the roomId instead of
 * searching by id because id in the params is the emitted roomId.
 */
export const findRoom = async (req, res) => {
  const { id } = req.params;
  const foundRoom = await RoomModel.findOne({ roomId: id });
  if (!foundRoom) {
    throw new ExpressError("No room found", 400);
  }
  res.status(200).json({ message: "room found", foundRoom });
};
