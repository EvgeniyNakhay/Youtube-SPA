import { Card } from "antd";
import "./VideoCards.css";
const { Meta } = Card;

const formatViews = (viewsCount) => {
  if (!viewsCount) return "0 просмотров";

  const views = parseInt(viewsCount);

  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + " млн. просмотров";
  } else if (views >= 1000) {
    return Math.floor(views / 10000) + " тыс. просмотров";
  }
  return views + "просмотров";
};

const VideoCards = ({ data }) => {
  return (
    <div className="video-container">
      {data.map((item) => (
        <div className="video">
          <img
            src={item.snippet?.thumbnails?.high?.url}
            className="thumbnail"
            alt={item.snippet?.title}
          />
          <div className="content">
            <a
              href={`https://www.youtube.com/results?search_query=${item.snippet?.title}`}
              className="title"
            >
              {/* {item.snippet?.title.slice(0, 60)} */}
              {item.snippet?.title.slice(0, 60)}
            </a>
            <p className="channel-name">{item.snippet?.channelTitle}</p>
            <p className="view-count">
              {formatViews(item.statistics.viewCount)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoCards;
