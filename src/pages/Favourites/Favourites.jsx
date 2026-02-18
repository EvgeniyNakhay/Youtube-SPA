import { Layout, Button, Empty } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

// import React, { useEffect, useState } from "react";
import "./style.css";
import MainHeader from "../../components/MainHeader/MainHeader";
import EditModalWind from "../../components/ModalWind/EditModalWind";
import { removeFavourite } from "../../redux/slices/favouritesSlice";
import { useNavigate } from "react-router";
import { setIsEditModalOpen } from "../../redux/slices/isEditModalOpenSlice";
import { activeFavourite } from "../../redux/slices/activeFavouriteSlice";
import { setSearchTerm } from "../../redux/slices/searchTermSlice";
// import { NavLink } from "react-router-dom";
// import { setSearchTerm } from "../../redux/actions/searchTermAction";
const { Content } = Layout;

const Favourites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const [requests, setRequests] = useState(null);
  const favourites = useSelector((store) => store.favourites);
  const isEditModalOpen = useSelector((store) => store.isEditModalOpen.value);

  const handleEdit = (
    id,
    searchTerm,
    favouriteRequestName,
    sortByF,
    maxResult,
  ) => {
    dispatch(
      activeFavourite({
        id,
        searchTerm,
        favouriteRequestName,
        sortByF,
        maxResult,
      }),
    );
    dispatch(setIsEditModalOpen(true));
  };

  const onSearch = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm));
    navigate("/searchResults");
  };

  //   const searchFavRequest = (id, searchTerm, favRequest, sortByF, maxResult) => {
  //     dispatch(activeFavRequest(id, searchTerm, favRequest, sortByF, maxResult));
  //     dispatch(setSearchTerm(searchTerm));
  //     navigate(`/search/${searchTerm}`);
  //   };

  return (
    <>
      <Layout
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <MainHeader />
        <>
          <Content
            style={{
              marginInline: "200px",
            }}
          >
            <Content style={{ margin: "40px 0" }}>
              <h1
                style={{
                  fontSize: "36px",
                }}
              >
                Избранное
              </h1>
            </Content>
            <div
              style={{
                background: "#FFF",
                flex: "1 1 auto",
                overflow: "auto",
                display: "flex", // Added this
                flexDirection: "column", // Added this
                minHeight: "400px", // Ensures the white box has height when empty
              }}
            >
              {favourites.length > 0 ? (
                favourites.map((item) => {
                  return (
                    <div
                      key={item.id}
                      style={{
                        marginBlock: "10px",
                        padding: "0 20px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        type="text"
                        style={{
                          fontWeight: 500,
                          color: "#000000",
                        }}
                        onClick={() => onSearch(item.searchTerm)}
                      >
                        {item.favouriteRequestName}
                      </Button>
                      <div>
                        <Button
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.searchTerm,
                              item.favouriteRequestName,
                              item.sortByF,
                              item.maxResult,
                            )
                          }
                          style={{ marginLeft: 20 }}
                          type="primary"
                          icon={<EditOutlined />}
                        />
                        <Button
                          onClick={() => dispatch(removeFavourite(item.id))}
                          style={{ marginLeft: 20 }}
                          type="primary"
                          icon={<DeleteOutlined />}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <Empty description="У вас пока нет избранных запросов" />
              )}
            </div>
          </Content>
        </>
      </Layout>
      {isEditModalOpen && <EditModalWind />}
    </>
  );
};

export default Favourites;
