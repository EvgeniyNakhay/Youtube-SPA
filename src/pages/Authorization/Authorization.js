import { Button, Layout, Form, Input } from 'antd';
import logo from './auth-img/logo.svg'
import React, {useState} from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

const Authorization = () => {

  let navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    

  async function getRes() {
    const res = await fetch(
      "https://typ-back-end.herokuapp.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: email,
          password: password
        })
      })
    const data = await res.json();
    navigate(`/`)
    localStorage.getItem('token', data.token)
  }

  const clickEnter = (e) => {
    e.preventDefault();
    getRes()
  }

  return (
    <Layout className="layout">

      <Content
        style={{
          padding: '140px 465px',
          height: '100vh',
        }}
      >

        <div className="site-layout-content">

          <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          > 

          <Form.Item
            wrapperCol={{
              span: 10,
              offset: 10,
            }}
          >
            <img  src={logo} alt = 'logo'/>
          </Form.Item>

          <h1 className="main-label">Вход</h1>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Введите логин!',
              },
            ]}
          >
            <Input
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Логин"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль!',
              },
            ]}
          >
            <Input.Password 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
            />
          </Form.Item>

          <Form.Item
            Col={{
              span: 12,
              offset: 6,
            }}
          >
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              onClick={(e) => clickEnter(e)}
            >
              Войти
            </Button>

          </Form.Item>

        </Form>
        </div>
      </Content>
    </Layout>  
  );
};

export default Authorization;
