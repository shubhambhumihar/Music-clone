import React, { useEffect } from "react";
import "./SidebarOption.css";
import { useStateValue } from "./stateProvider";
import SpotifyWebApi from "spotify-web-api-js";

var s = new SpotifyWebApi();

function SidebarOption({ item, Icon, title }) {
  const [{ playlists, token }, dispatch] = useStateValue();

  const handleClick = () => {
    // console.log("ITEM", item);
    s.createPlaylist(
      "slkfhg29x6iq87opjorev87b5",
      {
        name: item.name,
      },
      (err, data) => {
        console.log(data);
        if (!err) {
          dispatch({
            type: "ADD_PLAYLIST",
            new_playlist: data,
          });
        }
        console.log("error", err);
      }
    );
    //     s.createPlaylist().then((res)=>{
    // console.log(res);
    //     })
  };

  return (
    <div onClick={handleClick} className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{item.name}</p>}
    </div>
  );
}

export default SidebarOption;
