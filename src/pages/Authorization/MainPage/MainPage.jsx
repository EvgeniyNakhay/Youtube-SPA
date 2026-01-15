import { Breadcrumb, Layout, Menu } from "antd";
import MainHeader from "../../../components/MainHeader/MainHeader";
import MainInput from "../../../components/MainInput/MainInput";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  //   const {
  //     token: { colorBgContainer },
  //   } = theme.useToken();

  return (
    <Layout>
      <MainHeader />
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            // background: colorBgContainer,
          }}
        >
          <MainInput />
        </div>
      </Content>
    </Layout>
  );
};
export default MainPage;
