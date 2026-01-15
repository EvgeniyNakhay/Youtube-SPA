import { Breadcrumb, Layout, Menu, theme } from "antd";
import MainHeader from "../../../components/MainHeader/MainHeader";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <MainHeader />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
    </Layout>
  );
};
export default MainPage;
