import React from "react";
import Header from "./Header";
import "./PlayerBody.css";
import SongRow from "./SongRow";
import { useStateValue } from "./stateProvider";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function PlayerBody({ s }) {
  const [{ discover_weekly, playlists }, dispatch] = useStateValue();
  console.log(playlists);
  // console.log(discover_weekly?.tracks.items);
  return (
    <div className="playerBody">
      <Header s={s} />

      {/* discover weekly */}
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name} </h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* {console.log(discover_weekly.tracks.items)} */}
        {/* {discover_weekly?.tracks.items.map((item) => {
          return <SongRow item={item} />;
        })} */}
        <h2>Your locally Saved playlist</h2>

        {playlists?.map((item) => {
          return <p className="playlist_para">{item.name}</p>;
        })}
      </div>
    </div>
  );
}

export default PlayerBody;
