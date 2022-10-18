import {Layout, Menu, Row, Col} from 'antd';
import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
const { Header} = Layout;

const MainHeader = () => (
  <>
    <Header
      style={{
        background: '#FFF',
        padding: '0'
      }}    
    >
      <div className='container'>
        <img className='logo' src={logo} alt = 'logo'/>
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Menu.Item><NavLink to='/'>Поиск</NavLink></Menu.Item>
          <Menu.Item><NavLink to='/favourite'>Избранное</NavLink></Menu.Item>
          <Menu.Item><NavLink to='/login'>Выйти</NavLink></Menu.Item>
        </Menu>
      </div>
    </Header>
    <Outlet/>
  </>
);

export default MainHeader;