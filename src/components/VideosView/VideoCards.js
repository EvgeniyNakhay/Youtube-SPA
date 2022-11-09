import { Col, Card, List, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Meta } = Card;
const style = {
  background: '#0092ff',
  display: 'flex',
  alignItems: 'column',
  justifyContent: 'center',
  padding: '8px 0',
};

const CustomCard = () => (
  <Link to='/'>
    <Card
      hoverable ="true"
      style={{
        width: '100%',
      }}
      cover={<img alt='title' src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" style={{height:'180px', width:'100%'}}/>}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </Link>
);



const VideoCards = () => {
  const requestedVideos = useSelector((store) => store.requestedVideos);
  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={requestedVideos}
      renderItem={(item) => (
        // <List.Item key={item.id}>
        <List.Item>
          <Card 
            style={{padding:0}}
            cover={<img alt='logo' src={item.picture.large} style={{height:'180px', width:'100%'}}/>}
            // cover={<img alt='logo' src={item.snippet.thumbnails.medium.url} style={{height:'180px', width:'100%'}}/>}
          >
            <Meta title={item.name.last.slice(0, 60)} description={item.email.slice(0, 60)} />
            {/* <Meta title={item.snippet.title} description={item.snippet.channelTitle} /> */}
          </Card>
        </List.Item>
      )}
    />
  );
  }
export default VideoCards;