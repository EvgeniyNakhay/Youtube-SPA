import { NavLink, useLocation, useNavigate } from "react-router";
import logo from "./images/logo.svg";
import "./style.css";

import { Breadcrumb, Flex, Layout, Menu } from "antd";
import { setSearchTerm } from "../../redux/slices/searchTermSlice";
import { useDispatch } from "react-redux";

const { Header, Content, Footer } = Layout;

const leftItems = [
  { key: "/", label: "Поиск" },
  { key: "/favourites", label: "Избранное" },
];

const rightItems = [{ key: "/authorization", label: "Выйти" }];

const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleNavigateTo = (e) => {
    navigate(`${e.key}`);
    dispatch(setSearchTerm(""));
  };

  return (
    <Header style={{ background: "#FFF", padding: "0 200px" }}>
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
        <Flex align="center" gap="large" style={{ flex: 1 }}>
          <img className="logo" src={logo} alt="logo" style={{ width: 40 }} />
          <Menu
            mode="horizontal"
            items={leftItems}
            onClick={handleNavigateTo}
            style={{ borderBottom: "none", minWidth: 200 }}
            selectedKeys={[location.pathname]}
          />
        </Flex>

        <Menu
          mode="horizontal"
          items={rightItems}
          onClick={handleNavigateTo}
          style={{ borderBottom: "none" }}
          selectedKeys={[location.pathname]}
        />
      </Flex>
    </Header>
  );
};

export default MainHeader;
