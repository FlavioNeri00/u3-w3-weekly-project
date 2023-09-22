const initialState = {
  content: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
  content2: [],
};

const hipHopArtistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALBUM":
      return {
        ...state,
        content2: action.payload,
      };
    default:
      return state;
  }
};

export default hipHopArtistsReducer;
