import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Input, Col, Button} from 'antd';
const { Content} = Layout;
const { Search } = Input;


const MainInput = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [videos, setVideos] = useState([])

  const src = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${searchTerm}&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`
  
  useEffect(()=>{
    axios
      .get(src)
        .then((data)=>setVideos(data.data.items))
  },[])

  const navigate = useNavigate();

  const handleSearch = () => {   
    searchTerm && navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  return (
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
              enterButton="Найти"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              size="large"
              onSearch={(e) => handleSearch(e)}
            />
          </Content>
        </Col>
      </Row>  
      
      </Layout>  
  )
}

export default MainInput;