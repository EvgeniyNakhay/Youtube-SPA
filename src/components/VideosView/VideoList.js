import { List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  { title: 'Ant Design Title 1'},{ title: 'Ant Design Title 2'},{ title: 'Ant Design Title 3'},{ title: 'Ant Design Title 4'},
  { title: 'Ant Design Title 5'},{ title: 'Ant Design Title 6'},{ title: 'Ant Design Title 7'},{ title: 'Ant Design Title 8'},
  { title: 'Ant Design Title 9'},{ title: 'Ant Design Title 10'},{ title: 'Ant Design Title 11'},{ title: 'Ant Design Title 12'},
];

const VideoList = () => (
  <Link to='/'>
    <List
      hoverable
      itemLayout="horizontal"
      dataSource={data}
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
  </Link>
);

export default VideoList;