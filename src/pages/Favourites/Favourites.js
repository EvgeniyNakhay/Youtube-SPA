import {Layout, List, Divider } from 'antd';
import React, {useState} from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
const { Content} = Layout;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const Favourites = () => (
  <>
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
                <Content>
                    <List 
                        style={{
                            background: '#FFF'
                        }}
                        size="large"
                        dataSource={data}
                        renderItem={(item) => <List.Item style={{fontWeight: 'bold'}}>{item}</List.Item>}
                    />
                </Content>
                
            </Content>
              
        </>   
    </Layout>
  </>
);

export default Favourites;