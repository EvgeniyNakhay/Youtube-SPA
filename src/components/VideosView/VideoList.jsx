import "./VideoList.css";

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
                {item.statistics?.viewCount} просмотров
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default VideoList;
