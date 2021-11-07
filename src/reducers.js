export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
  featured_playlist: [],

  // "BQBZUTa3U7AiuHWWD1sYAkiczK1KGF6dnbUI5WWR-VnVi7_kmotXHRXxB4R1usBTw0OdbeuaOSARrWA6Z4DHpCk16bOtYCC7Ot5V8k5lvH6toqNm6dSaUVWdI66tEwNKwOnZ2drAog6WphPdGofHa4LqK-A14OBD9fNAL4JV5qDST2-yk4-eyaKL7TMTApTJWtLaTk9ENqJvCV0QqLmvzg",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_FEATURED_PLAYLIST":
      return {
        ...state,
        featured_playlist: action.featured_playlist,
      };
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlists: [action.new_playlist, ...state.playlists],
      };

    default:
      return state;
  }
};

export default reducer;
