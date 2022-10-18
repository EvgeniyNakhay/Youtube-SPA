import {Layout, Menu, Input, Row, Col } from 'antd';
import React, {useEffect, useState} from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import './style.css';
import axios from 'axios';
const { Content} = Layout;
const { Search } = Input;

// const onSearch = (value) => console.log(value);

const MainPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [videos, setVideos] = useState([])

  const handleSearch = () => {
    setInputValue(inputValue)
    console.log(videos)
    //const link =  await axios.get`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&maxResults=2&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`
  } 
  
  useEffect(()=>{
    axios.get`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&maxResults=2&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`.then((data)=>setVideos(data.data.items))
    },[])
  
  return <>
  {/* <Navigate replace to="/login" /> */}
  <Layout
    style = {{
      height: '100vh'
    }}
  >
    <MainHeader/>
    <Layout>
    <Row >
      <Col span={12} offset={6}>
        <Content
          className="site-layout"
          style={{
            marginTop: '170px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            verticalAlign: 'middle',
          }}
        >
            <h1 
              style={{
                  fontSize: '36px',
                  paddingBottom: '40px',
                  marginBottom: 0,
              }}
            > 
              Поиск видео 
            </h1>
            <Search
              placeholder="Что хотите посмотреть?"
              allowClear
              enterButton="Найти"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              size="large"
              onSearch={(e) => handleSearch(e)}
            />
          </Content>
        </Col>
      </Row>  
      
      </Layout>  
  </Layout>
  </>
};

export default MainPage;