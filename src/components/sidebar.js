import React from "react";
import "../assets/styles/sidebar.css";
import SidebarRow from "./sidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLR69QVj_et0K5cQABVZj4qCe16leaPUHBSg&usqp=CAU"
        title="abdoug"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 informations" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default sidebar;
