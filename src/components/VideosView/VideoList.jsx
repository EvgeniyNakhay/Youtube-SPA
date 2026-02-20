import "./VideoList.css";
// import { useSelector } from "react-redux";

const VideoList = ({ titles, images }) => {
  // const requestedVideos = useSelector((store) => store.requestedVideos);

  return (
    <div className="video-list-container">
      {titles &&
        titles.map((item) => (
          <div className="video-list" key={item.id}>
            <img
              // src={item.snippet?.thumbnails?.high?.url}
              src={images.message}
              className="thumbnail-list"
              // alt={item.snippet?.title}
              alt={item.message}
            />
            <div className="content-list">
              <a
                // href={`https://www.youtube.com/results?search_query=${item.snippet?.title}`}
                href={`${item.name}`}
                className="title-list"
              >
                {/* {item.snippet?.title.slice(0, 60)} */}
                {/* {item.title} */}
                Как кормить кошку натуралкой | Перечень полезных для кошек
                продуктов{" "}
              </a>
              {/* <p className="channel-name-list">{item.snippet?.channelTitle}</p> */}
              <p className="channel-name-list">{item.name}</p>
              <p className="view-count-list">786 тыс. просмотров</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default VideoList;
