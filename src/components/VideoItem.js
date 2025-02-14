import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSubmit }) => {
  return (
    <div onClick={() => onVideoSubmit(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
