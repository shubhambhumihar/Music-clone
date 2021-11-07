import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "./stateProvider";

function Sidebar({ s }) {
  console.log(s);

  const [{ playlists, featured_playlist }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://ci6.googleusercontent.com/proxy/zrOmNVNxpVaBZdTYtwhUu4du871PsVlK_LXDRAWO5BsMMHu1-KWQNB6BV8pCmufeM0Y_Y83sDUfBdKP39ToNx753fhRM35THlsLAqthYuf2hoh06xPh2FofxpuSPCvmAqQ=s0-d-e1-ft#http://message-editor.scdn.co/newsletters/b220713a2d4ac7a75ebe1f9ee0c78549.png"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption s={s} title={playlist.name} />
      ))} */}

      {featured_playlist?.playlists?.items.map((item) => {
        return <SidebarOption item={item} />;
      })}
    </div>
  );
}

export default Sidebar;
