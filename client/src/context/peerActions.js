export const ADD_PEER_STREAM = "ADD_PEER_STREAM";
export const REMOVE_PEER_STREAM = "REMOVE_PEER_STREAM";

/** accepts peerId and stream from the RoomSocketContext user-joined listener*/
/** @addPeerAction will be passed in the dispatch in RoomSocketContext. This will then give the reducer function access to the type and the payload */

export const addPeerAction = (peerId, stream) => ({
  type: ADD_PEER_STREAM,
  payload: { peerId, stream },
});

export const removePeerAction = (peerId) => ({
  type: REMOVE_PEER_STREAM,
  payload: { peerId },
});
