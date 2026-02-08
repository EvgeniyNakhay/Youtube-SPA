import { Layout, Input, Segmented, Button, Modal } from "antd";
import {
  HeartOutlined,
  AppstoreOutlined,
  BarsOutlined,
  HeartFilled,
} from "@ant-design/icons";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useEffect, useState } from "react";
import ModalWind from "../../components/ModalWind/ModalWind";
import { useDispatch, useSelector } from "react-redux";
import VideoList from "../../components/VideosView/VideoList";
import VideoCards from "../../components/VideosView/VideoCards";
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
import { setSearchTerm } from "../../redux/slices/searchTermSlice";
import axios from "axios";
// import { setRequestedVideos } from "../../redux/actions/requestedVideos";
// import { fetchFromAPI } from "../../utils/fetchFromAPI";
const { Content } = Layout;
const { Search } = Input;

const SearchResults = () => {
  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  //   const { maxResult, sortByF } = useSelector((store) => store.activeFavRequest);
  //   const requestedVideos = useSelector((store) => store.requestedVideos);

  const searchTerm = useSelector((store) => store.searchTerm.value);
  const isModalOpen = useSelector((store) => store.isModalOpen.value);

  const [searchTermInput, setSearchTermInput] = useState(searchTerm);
  const [titles, setTitles] = useState([]);
  const [images, setImages] = useState([]);

  //   const api_key = "AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988";
  //   const video_http = "https://www.googleapis.com/youtube/v3/videos";

  // const fakeDataUrl =
  // // 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
  // // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`;
  //    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTermInput}&type=video&maxResults=12&key=${api_key}`

  // const appendData = () => {
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((body) => {
  //       // dispatch(setRequestedVideos(requestedVideos.concat(body.results)));
  //       console.log(requestedVideos);
  //     });
  // };

  // useEffect(() => {
  //   appendData();
  // }, [requestedVideos]);

  //   useEffect(() => {
  //     console.log(maxResult);
  //     console.log(sortByF);
  //     fetchFromAPI(
  //       `search?part=snippet&q=${searchTerm}&type=video&key=${api_key}`
  //     )
  //       // fetchFromAPI(`search?part=snippet&order=${sortByF}&maxResults=${searchTerm}&q=${searchTerm}&type=video&key=${api_key}`)
  //       .then((data) => {
  //         dispatch(setRequestedVideos(data.items));
  //       });
  //   }, [searchTerm]);

  const dataUrl = "https://jsonplaceholder.typicode.com/users";
  const imagesUrl = "https://dog.ceo/api/breeds/image/random";

  const getData = () => {
    axios({
      method: "GET",
      url: dataUrl,
    })
      .then((response) => {
        if (!response.data) {
          throw new Error(response.error);
        } else {
          setTitles(response.data);
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const getImages = () => {
    axios({
      method: "GET",
      url: imagesUrl,
    })
      .then((response) => {
        if (!response.data) {
          throw new Error(response.data.message);
        } else {
          setImages(response.data);
        }
      })
      .catch(function (response) {
        console.log(response.data.message);
      });
  };

  useEffect(() => {
    getData();
    getImages();
  }, []);

  const showModal = () => {
    dispatch(setIsModalOpen(true));
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTermInput));
  };

  const suffix = (
    <HeartOutlined
      onClick={showModal}
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  return (
    <>
      <Layout>
        <MainHeader />
        <Content
          style={{
            height: "100%",
            marginInline: "200px",
          }}
        >
          <Content>
            <h1
              style={{
                fontSize: "28px",
                marginTop: "40px",
              }}
            >
              Поиск видео
            </h1>
            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              size="large"
              suffix={suffix}
              value={searchTermInput}
              onChange={(e) => setSearchTermInput(e.target.value)}
              onSearch={handleSearch}
            />
          </Content>
          <Content
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                marginBottom: 0,
                display: "flex",
              }}
            >
              Видео по запросу
              <span
                style={{
                  fontWeight: "bold",
                  marginLeft: "5px",
                  marginBottom: 0,
                }}
              >
                "{searchTerm}"
              </span>
            </p>
            <Segmented
              onChange={() => setList(!list)}
              options={[
                {
                  value: "List",
                  icon: <BarsOutlined />,
                },
                {
                  value: "Kanban",
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          </Content>
          {list ? (
            <VideoList titles={titles} images={images} />
          ) : (
            <VideoCards titles={titles} images={images} />
          )}
        </Content>
      </Layout>
      {isModalOpen && <ModalWind />}
    </>
  );
};

export default SearchResults;
