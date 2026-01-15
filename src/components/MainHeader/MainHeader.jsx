import { NavLink } from "react-router";
import logo from "./images/logo.svg";

import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainHeader = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#FFF",
      }}
    >
      <img style={{ height: "48px", width: "48px" }} src={logo} alt="logo" />
      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <NavLink to="/">Поиск</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/favourite">Избранное</NavLink>
        </Menu.Item>
      </Menu>

      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <NavLink to="/login">Выйти</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MainHeader;
