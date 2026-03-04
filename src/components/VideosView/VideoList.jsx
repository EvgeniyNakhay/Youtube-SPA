import "./VideoList.css";

const formatViews = (viewsCount) => {
  if (!viewsCount) return "0 просмотров";

  const views = parseInt(viewsCount);

  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + " млн. просмотров";
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + " тыс. просмотров";
  }
  return views + "просмотров";
};

const VideoList = ({ data }) => {
  return (
    <div className="video-list-container">
      {data &&
        data.map((item) => (
          <div className="video-list" key={item.etag}>
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
                {item.snippet?.title}
              </a>
              <p className="channel-name-list">{item.snippet?.channelTitle}</p>
              <p className="view-count">
                {formatViews(item.statistics?.viewCount)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default VideoList;
