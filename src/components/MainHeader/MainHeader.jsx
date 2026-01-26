import { NavLink, useNavigate } from "react-router";
import logo from "./images/logo.svg";
import "./style.css";

import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "/", label: "Поиск" },
  { key: "/favourites", label: "Избранное" },
  { key: "/authorization", label: "Выйти" },
];
const MainHeader = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (e) => {
    navigate(`${e.key}`);
  };

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
          <Menu
            theme="light"
            mode="horizontal"
            items={items}
            onClick={handleNavigateTo}
          />
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
