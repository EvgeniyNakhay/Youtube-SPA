import { Layout, Button, Empty } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

// import React, { useEffect, useState } from "react";
import "./style.css";
import MainHeader from "../../components/MainHeader/MainHeader";
import EditModalWind from "../../components/ModalWind/EditModalWind";
import { removeFavourite } from "../../redux/slices/favouritesSlice";
// import { useNavigate } from "react-router";
import { setIsEditModalOpen } from "../../redux/slices/isEditModalOpenSlice";
import { activeFavourite } from "../../redux/slices/activeFavouriteSlice";
// import { NavLink } from "react-router-dom";
// import { setSearchTerm } from "../../redux/actions/searchTermAction";
const { Content } = Layout;

const Favourites = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [requests, setRequests] = useState(null);
  const favourites = useSelector((store) => store.favourites);
  const isEditModalOpen = useSelector((store) => store.isEditModalOpen.value);

  // const handleEdit = (id, searchTerm, favRequest, sortByF, maxResult) => {
  //   // dispatch(activeFavRequest(id, searchTerm, favRequest, sortByF, maxResult));
  //   dispatch(setIsEditModalOpen(true));
  // };

  const handleEdit = (id, searchTerm, favouriteRequestName) => {
    dispatch(setIsEditModalOpen(true));
    dispatch(activeFavourite({ id, searchTerm, favouriteRequestName }));
  };

  //   const searchFavRequest = (id, searchTerm, favRequest, sortByF, maxResult) => {
  //     dispatch(activeFavRequest(id, searchTerm, favRequest, sortByF, maxResult));
  //     dispatch(setSearchTerm(searchTerm));
  //     navigate(`/search/${searchTerm}`);
  //   };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <MainHeader />
        <>
          <Content
            style={{
              height: "100vh",
              paddingInline: "200px",
            }}
          >
            <Content>
              <h1
                style={{
                  fontSize: "36px",
                  marginTop: "40px",
                }}
              >
                Избранное
              </h1>
            </Content>
            <div
              style={{
                background: "#FFF",
              }}
            >
              {favourites.length > 0 ? (
                favourites.map((item) => {
                  return (
                    <div
                      key={item.id}
                      style={{
                        marginBlock: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        type="text"
                        style={{
                          fontWeight: 500,
                          color: "#000000",
                          padding: 0,
                        }}
                      >
                        {item.favouriteRequestName}
                      </button>
                      <div>
                        <Button
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.searchTerm,
                              item.favouriteRequestName,
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
                <Empty />
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
