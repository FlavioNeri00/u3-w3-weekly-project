const initialState = {
  rockArtists: {
    content: ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"],
  },

  popArtists: {
    content: ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"],
  },

  hipHopArtists: {
    content: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
