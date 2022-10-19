import {Layout, Menu, Input, Row, Col } from 'antd';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainInput  from '../../components/MainInput/MainInput';
// import './style.css';

import SearchResults from '../SearchResults/SearchResults';


// const onSearch = (value) => console.log(value);

const MainPage = () => {
  // const [videos, setVideos] = useState([]);
  // const { searchTerm } = useParams;
  return (
  <Layout
    style = {{
      height: '100vh'
    }}
  >
    <MainHeader/>
    <MainInput/>
  </Layout>
  )
};

export default MainPage;