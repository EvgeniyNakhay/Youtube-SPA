import { List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const VideoList = ({videos}) => {
  console.log(videos)
  return (
    <List
      hoverable = 'true'
      itemLayout="horizontal"
      dataSource={videos}
      renderItem={(item, index) => (            // Проверить, корректно ли работает index в качестве ключа
        <List.Item
          key={index} 
          style={{
            padding:'0',
            margin:'16px 0'
          }}
        >
          <List.Item
            style={{
              padding:'0'
            }}
            extra={
              <img
                width= '157px'
                height= '88px'
                alt={item.snippet?.title}
                src={item.snippet?.thumbnails?.high?.url}
              />
            }
          />
            <List.Item.Meta
              style={{
                marginLeft:'20px',
                fontWeight:'bold',
              }}
              title={item.snippet?.title.slice(0, 60)}
              description={item.snippet?.channelId}             
            />
            {item.channelDetail?.statistics?.subscriberCount && (
              <List.Item.Meta
                style={{
                  marginLeft:'20px',
                }}
                title={`${parseInt(item.channelDetail?.statistics?.subscriberCount).toLocaleString()} подписчиков`}
              />
            )}
        </List.Item>
      )}
    />
);
}

export default VideoList;