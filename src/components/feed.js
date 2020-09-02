import React, { useState, useEffect } from "react";
import StoryReel from "./storyReel";
import MessageSender from "../components/messageSender";
import Post from "./post";
import db from "../config/firebase";
import "../assets/styles/feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(e => ({ id: e.id, data: e.data() })))
      );
  });

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(e => (
        <Post
          key={e.id}
          profilePic={e.data.profilePic}
          image={e.data.image}
          username={e.data.username}
          message={e.data.message}
          timestamp={e.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
