import mongoose from "mongoose";

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    roomName: {
      type: String,
    },
    host: {
      type: String,
      required: true,
    },
    meetType: {
      type: String,
    },
    meetDate: {
      type: String,
    },
    participants: {
      type: Array,
    },
    currentParticipants: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const RoomModel = mongoose.model("RoomModel", RoomSchema);
