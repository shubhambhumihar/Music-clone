import React from "react";

import PlayerBody from "./PlayerBody";
import Sidebar from "./Sidebar";
import "./SpotifyPlayer.css";

function SpotifyPlayer({ s }) {
  return (
    <div className="spotifyPlayer">
      <div className="player__body">
        <Sidebar s={s} />

        <PlayerBody s={s} />
      </div>
    </div>
  );
}

export default SpotifyPlayer;
