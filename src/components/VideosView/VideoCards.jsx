import { Card, List } from "antd";
import React from "react";
// import { useSelector } from "react-redux";
import "./VideoCards.css";
const { Meta } = Card;

const VideoCards = ({ titles, images }) => {
  // const requestedVideos = useSelector((store) => store.requestedVideos);
  return (
    <div className="video-container">
      {titles.map((item) => (
        <div className="video">
          <img
            // src={item.snippet?.thumbnails?.high?.url}
            src={images.message}
            className="thumbnail"
            // alt={item.snippet?.title}
          />
          <div className="content">
            <a
              // href={`https://www.youtube.com/results?search_query=${item.snippet?.title}`}
              className="title"
            >
              {/* {item.snippet?.title.slice(0, 60)} */}
              {item.title}
            </a>
            {/* <p className="channel-name">{item.snippet?.channelTitle}</p> */}
            <p className="channel-name-list">{item.name}</p>

            <p className="view-count">786 тыс. просмотров</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoCards;
