import { List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const VideoList = ({videos}) => {
  
  return (
    <List
      hoverable
      itemLayout="horizontal"
      dataSource={videos}
      renderItem={(item) => (
        <List.Item 
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
                width={157}
                height={88}
                alt="logo"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          />
          <List.Item.Meta
            style={{marginLeft:'20px'}}
            title={item.title}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"             
          />
        </List.Item>
      )}
    />
);
}

export default VideoList;