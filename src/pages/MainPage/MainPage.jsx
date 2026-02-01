import { Breadcrumb, Layout, Menu } from "antd";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainInput from "../../components/MainInput/MainInput";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <MainHeader />
      <MainInput />
    </Layout>
  );
};
export default MainPage;
