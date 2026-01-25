// import React, { useState } from "react";
import { Layout, Row, Input, Col } from "antd";
import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../../redux/actions/searchTermAction";
// import { activeFavRequest } from "../../redux/actions/activeFavRequest";

const { Content } = Layout;
const { Search } = Input;

const MainInput = () => {
  const navigate = useNavigate();

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
            <h1
              style={{
                fontSize: "36px",
                paddingBottom: "40px",
                marginBottom: 0,
              }}
            >
              Поиск видео
            </h1>
            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              //   onChange={(e) => setSearchTermInput(e.target.value)}
              //   value={searchTermInput}
              size="large"
              onSearch={handleSearch}
            />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default MainInput;
