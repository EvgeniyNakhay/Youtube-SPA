import logo from "./images/logo.svg";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useNavigate } from "react-router";

const Authorization = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate("/");
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item name="logo">
        <img src={logo} alt="logo" />
      </Form.Item>
      <Form.Item name="auth-caption">
        <h1>Вход</h1>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Введите логин!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Логин" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Authorization;
