import { NavLink } from "react-router";
import logo from "./images/logo.svg";
import "./style.css";

import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainHeader = () => {
  return (
    <Header
      style={{
        background: "#FFF",
        padding: "0",
      }}
    >
      <div className="container">
        <div className="menu">
          <img className="logo" src={logo} alt="logo" />
          <Menu theme="light" mode="horizontal">
            <Menu.Item>
              <NavLink to="/">Поиск</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/favourites">Избранное</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/authorization">Выйти</NavLink>
            </Menu.Item>
          </Menu>
          <Menu theme="light" mode="horizontal"></Menu>
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
