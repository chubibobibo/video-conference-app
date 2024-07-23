import { ADD_PEER_STREAM, REMOVE_PEER_STREAM } from "./PeerActions.js";

// const PeerState = {};

// const PeerAction = {
//   type: ADD_PEER_STREAM,
//   payload: { peerId: "hello", stream: "hello" },
// };

/** reducer */
/** the value of @action depends on what was passed on the dispatch
 * in our case it was the addPeerAction which has the type(ADD_PEER_STREAM) and the payload(peerId and stream)
 */
export const peerReducer = (state, action) => {
  switch (action.type) {
    case ADD_PEER_STREAM:
      /** returns a new object of an array of peerId and stream that was passed on the user-joined listener in the context */
      return {
        ...state,
        [action.payload.peerId]: { stream: action.payload.stream },
      };
    case REMOVE_PEER_STREAM:
      const { [action.payload.peerId]: deleted, ...rest } = state;
      return rest;
    default:
      return { ...state };
  }
};
