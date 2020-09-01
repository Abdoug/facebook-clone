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
        src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/69968969_163430454736461_8410343287591796736_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=cQAjGWdxq0wAX-ubuDG&_nc_ht=scontent-mrs2-2.xx&oh=cebeee1e6c3baaebc59cf48178e20654&oe=5F72E420"
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
