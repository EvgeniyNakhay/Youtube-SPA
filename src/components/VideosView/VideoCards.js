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
      hoverable
      style={{
        width: '100%',
      }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{height:'202px'}}/>}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </Link>
);

const VideoCards = () => (
  <>
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
  </>
);

export default VideoCards;