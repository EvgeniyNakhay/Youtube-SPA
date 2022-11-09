// import { List } from 'antd';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';



import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const VideoList = () => {
  const requestedVideos = useSelector((store) => store.requestedVideos);
  return (
    <List>
      <VirtualList
        data={requestedVideos}
        height= 'auto'
        itemHeight={47}
        itemKey='email'
      >
        {(item) => (
          <List.Item
            style={{
              display:'flex',
              justifyContent:'left',
              alignItems:'stretch',
              padding:'0',
              paddingBottom:'16px',
              maxWidth:'687px',
            }}
            key={item.email}
          >
            <img
              width={157}
              height={88}
              alt="logo"
              src={item.picture.large}
              // src={item.snippet.thumbnails.medium.url}
            />
            <div 
              style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                paddingInline:'20px',
                wordWrap: 'break-word',
              }}
            >
              <h4> 
                {item.name.last}
              </h4>
              <div>
                <p 
                  style={{
                    marginBottom:'0',
                    color:'rgba(23, 23, 25, 0.3)',
                }}
                > 
                  {/* {item.snippet.channelTitle} */}
                  {item.email}
                </p>
                <p 
                  style={{
                    marginBottom:'0',
                    color:'rgba(23, 23, 25, 0.3)',
                }}>
                  10 m views
                </p>
              </div>
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default VideoList;


// ------------- Previous version--------------------

// const VideoList = ({videos}) => {
//   return (
//     <List
//       hoverable = 'true'
//       itemLayout="horizontal"
//       dataSource={videos}
//       renderItem={(item, index) => (            // Проверить, корректно ли работает index в качестве ключа
//         <List.Item
//           key={index} 
//           style={{
//             padding:'0',
//             margin:'16px 0'
//           }}
//         >
//           <List.Item
//             style={{
//               padding:'0'
//             }}
//             extra={
//               <img
//                 width= '157px'
//                 height= '88px'
//                 alt={item.snippet?.title}
//                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"  //{item.snippet?.thumbnails?.high?.url}
//               />
//             }
//           />
//             <List.Item.Meta
//               style={{
//                 marginLeft:'20px',
//                 fontWeight:'bold',
//               }}
//               title={item.snippet?.title.slice(0, 60)}
//               description={item.snippet?.channelId}             
//             />
//             {item.channelDetail?.statistics?.subscriberCount && (
//               <List.Item.Meta
//                 style={{
//                   marginLeft:'20px',
//                 }}
//                 title={`${parseInt(item.channelDetail?.statistics?.subscriberCount).toLocaleString()} подписчиков`}
//               />
//             )}
//         </List.Item>
//       )}
//     />
// );
// }

// export default VideoList;