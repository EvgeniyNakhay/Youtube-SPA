import { NavLink } from "react-router";
import logo from "./images/logo.svg";
import "./style.css";

import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainHeader = () => {
  const items = [
    {
      key: "1",
      //   icon: <UserOutlined />,
      label: "Поиск",
    },
    {
      key: "2",
      //   icon: <VideoCameraOutlined />,
      label: "Избранное",
    },
    {
      key: "3",
      //   icon: <UploadOutlined />,
      label: "Выйти",
    },
  ];

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
          <Menu theme="light" mode="horizontal" items={items} />

          {/* <Menu.Item>
              <NavLink to="/">Поиск</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/favourite">Избранное</NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <Menu theme="light" mode="horizontal">
          <Menu.Item>
            <NavLink to="/login">Выйти</NavLink>
          </Menu.Item> */}
          {/* </Menu> */}
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
