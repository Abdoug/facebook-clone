import React from "react";
import StoryReel from "./storyReel";
import MessageSender from "../components/messageSender";
import "../assets/styles/feed.css";

function feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default feed;
