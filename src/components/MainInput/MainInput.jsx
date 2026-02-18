// import React, { useState } from "react";
import { Layout, Row, Input, Col } from "antd";
import { useNavigate } from "react-router";
import { setSearchTerm } from "../../redux/slices/searchTermSlice";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../../redux/actions/searchTermAction";
// import { activeFavRequest } from "../../redux/actions/activeFavRequest";

const { Content } = Layout;
const { Search } = Input;

const MainInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchTerm = useSelector((store) => store.searchTerm.value);

  const handleSearch = () => {
    navigate("/searchResults");
  };

  return (
    <Layout>
      <Row>
        <Col span={12} offset={6}>
          <Content
            className="site-layout"
            style={{
              marginTop: "170px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              verticalAlign: "middle",
            }}
          >
            <h1>Поиск видео</h1>
            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              value={searchTerm}
              size="large"
              onSearch={handleSearch}
              style={{ marginTop: "30px" }}
            />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default MainInput;
