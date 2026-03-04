import { Layout, Input, Segmented, Button, Modal, Popover, Spin } from "antd";
import {
  HeartOutlined,
  AppstoreOutlined,
  BarsOutlined,
  HeartFilled,
} from "@ant-design/icons";
import axios from "axios";

import MainHeader from "../../components/MainHeader/MainHeader";
import { lazy, useEffect, useState } from "react";
import ModalWind from "../../components/ModalWind/ModalWind";
import { useDispatch, useSelector } from "react-redux";
const VideoList = lazy(() => import("../../components/VideosView/VideoList"));
const VideoCards = lazy(() => import("../../components/VideosView/VideoCards"));
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
import { setSearchTerm } from "../../redux/slices/searchTermSlice";
import { useNavigate } from "react-router";
const { Content } = Layout;
const { Search } = Input;

const SearchResults = () => {
  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchTerm = useSelector((store) => store.searchTerm.value);
  const favourites = useSelector((store) => store.favourites);
  const isModalOpen = useSelector((store) => store.isModalOpen.value);

  const [searchTermInput, setSearchTermInput] = useState(searchTerm);
  const [data, setData] = useState({});
  const [totalResults, setTotalResults] = useState(0);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const dataUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=relevance&q=${searchTerm}&key=${API_KEY}`;

  const getData = async () => {
    try {
      const searchResponse = await axios.get(dataUrl);
      const searchItems = searchResponse.data.items;

      setTotalResults(searchResponse.data.pageInfo.totalResults);
      setData(searchItems);

      const videoIds = searchItems.map((item) => item.id.videoId).join(",");
      if (videoIds) {
        const statsResponse = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`,
        );
        const statsItems = statsResponse.data.items;
        const mergedData = searchItems.map((item) => {
          const stats = statsItems.find((i) => i.id === item.id.videoId);
          return {
            ...item,
            statistics: stats ? stats.statistics : null,
          };
        });
        setData(mergedData);
        console.log(mergedData);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => getData(), []);

  const showModal = () => {
    dispatch(setIsModalOpen(true));
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTermInput));
    getData();
  };

  const isFavourite = favourites.some(
    (item) => item.searchTerm === searchTermInput,
  );

  const suffix = isFavourite ? (
    <Popover
      placement="bottom"
      title='Поиск сохранен в разделе "Избранное"'
      content={
        <a onClick={() => navigate("/favourites")}>Перейти в избранное</a>
      }
    >
      <HeartFilled
        style={{
          fontSize: 16,
          color: "#1890ff",
          cursor: "pointer",
        }}
      />
    </Popover>
  ) : (
    <HeartOutlined
      onClick={showModal}
      style={{
        fontSize: 16,
        color: "#1890ff",
        cursor: "pointer",
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
                margin: "40px 0 20px",
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
              marginTop: "30px",
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
                  marginInline: "10px",
                  marginBottom: 0,
                }}
              >
                "{searchTerm}"
              </span>
              <span style={{ font: "#1717194D", opacity: "30%" }}>
                {totalResults}
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
          {data.length > 0 ? (
            list ? (
              <VideoList data={data} />
            ) : (
              <VideoCards data={data} />
            )
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Spin tip="Fetching data..." />
            </div>
          )}
        </Content>
      </Layout>
      {isModalOpen && <ModalWind />}
    </>
  );
};

export default SearchResults;
