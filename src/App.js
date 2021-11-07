import React, { useEffect } from "react";

import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./setup-spotify";
import SpotifyPlayer from "./SpotifyPlayer";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./stateProvider";

var s = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateValue();

  // how to get rhe token when we initially render the page -> use the useEffect hook
  useEffect(() => {
    let hash = getTokenFromUrl();
    // empty the token from URL
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      s.setAccessToken(_token);
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        // console.log(playlists);
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists.items,
        });
      });

      s.getPlaylist("37i9dQZEVXcTbqzCEKa1kY").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });

      s.getFeaturedPlaylists().then((data) => {
        console.log(data);
        dispatch({
          type: "SET_FEATURED_PLAYLIST",
          featured_playlist: data,
        });
      });
    }
  }, []);

  return (
    <div className="app">{token ? <SpotifyPlayer s={s} /> : <Login />}</div>
  );
}

export default App;
