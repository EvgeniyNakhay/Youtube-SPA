import { Col, Card, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

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

const VideoCards = (videos) => (
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
      <Col className="gutter-row" span={6}>
        <CustomCard/>
      </Col>
    </Row>
);

export default VideoCards;