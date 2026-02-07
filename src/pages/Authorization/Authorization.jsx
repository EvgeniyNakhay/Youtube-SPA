import logo from "./images/logo.svg";
import "./style.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Layout } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async () => {
    try {
      const result = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );
      const data = await result.json();
      if (!data.token) {
        throw new Error(data.message);
      } else {
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout className="layout">
      <Form
        name="login"
        initialValues={{ remember: true }}
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item name="logo" className="main-label">
          <img src={logo} alt="logo" />
        </Form.Item>
        <Form.Item name="auth-caption" className="main-label">
          <h1>Вход</h1>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Введите логин!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Логин"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите пароль!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};
export default Authorization;
