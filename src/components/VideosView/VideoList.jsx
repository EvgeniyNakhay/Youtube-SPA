import { List } from "antd";
import VirtualList from "rc-virtual-list";
import React from "react";
import "./VideoList.css";
import { useSelector } from "react-redux";

const VideoList = () => {
  const requestedVideos = useSelector((store) => store.requestedVideos);
  return (
    <div className="video-list-container">
      {requestedVideos.map((item) => (
        <div className="video-list" key={item.id.videoId}>
          <img
            src={item.snippet?.thumbnails?.high?.url}
            className="thumbnail-list"
            alt={item.snippet?.title}
          />
          <div className="content-list">
            <a
              href={`https://www.youtube.com/results?search_query=${item.snippet?.title}`}
              className="title-list"
            >
              {item.snippet?.title.slice(0, 60)}
            </a>
            <p className="channel-name-list">{item.snippet?.channelTitle}</p>
            <p className="view-count-list">786 тыс. просмотров</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoList;
