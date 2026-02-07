import logo from "./images/logo.svg";
import "./style.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Layout } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = () => {
    axios({
      method: "POST",
      url: "https://todo-redev.herokuapp.com/api/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        if (!response.data.token) {
          throw new Error(response.data.message);
        } else {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data.errors[0].msg);
      });
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
