import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSubmit }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSubmit={onVideoSubmit}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list"> {renderedList} </div>;
};

export default VideoList;
