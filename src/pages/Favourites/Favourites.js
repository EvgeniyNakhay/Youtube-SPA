import {Layout, List, Divider } from 'antd';
import React, {useState} from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import {useDispatch, useSelector} from "react-redux";
const { Content} = Layout;

const Favourites = () => {
  const favourites = useSelector((store) => store.favourites);
  return <>
  {/* <Navigate replace to="/authorization" /> */}
    <Layout style={{height: '100vh'}}>
      <MainHeader/>
        <>
          <Content 
            style={{
              height: '100vh',
              paddingInline: '200px',
            }}
          >
          <Content>
            <h1 
              style={{
                fontSize: '36px',
                marginTop: '40px',
              }}
            > 
              Избранное 
            </h1>
          </Content> 
            <List 
              style={{
                background: '#FFF'
              }}
              size="large"
              dataSource={favourites}
              renderItem={(item) => <List.Item>{item.favRequest}</List.Item>}
            />
        </Content>
      </>   
    </Layout>
  </>
};

export default Favourites;