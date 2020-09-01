import React from "react";
import "../assets/styles/widget.css";

function Widget() {
  const windowHeight = window.innerHeight;
  const url = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKYOconseil%2F&tabs=timeline&width=340&height=${windowHeight}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1071710993207893`;
  return (
    <div className="widget">
      <iframe
        title="kyo-embeded"
        src={url}
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
