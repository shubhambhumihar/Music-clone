import React from "react";
import "./SongRow.css";

function SongRow({ item }) {
  //   console.log(item);
  return (
    <div className="songRow">
      {/* <p>{item?.track?.name}</p> */}
      {/* <p> {item?.track?.name}</p>
      <p>{item?.track.artists[0].name}</p> */}
      <img
        className="songRow__album"
        src={item.track.album.images[0].url}
        alt=""
      />

      <div className="songRow__info">
        <h1>{item.track.name}</h1>
        <p>
          {item.track.artists.map((artist) => artist.name).join(", ")}
          {item.track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
