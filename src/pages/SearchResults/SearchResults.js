import {Layout, Input, Segmented, Button, Modal, Form, Select, Col, Row, Slider, InputNumber, List } from 'antd';
import React, {useState, useEffect} from 'react';
import {HeartOutlined, AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import VideoList from '../../components/VideosView/VideoList';
import VideoCards from '../../components/VideosView/VideoCards';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const { Option } = Select;
const { Content} = Layout;
const { Search } = Input;
// const onSearch = (value) => console.log(value);

const SearchResults = () => {
  const [list, setList] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  const src = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${searchTerm}&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`
  
  useEffect(()=>{
    axios
      .get(src)
        .then((data)=>setVideos(data.data.items))
  },[])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const suffix = (
    <HeartOutlined
      onClick={() => showModal()}
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);
  
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
  
    return <>
      <p style={{
        textAlign:'left',
        marginBottom:'0'
      }}>
        Максимальное количество
      </p>
      <Row>
        <Col span={19}>
          <Slider
            min={0}
            max={50}
            style={{
              marginTop: '12px',
              marginLeft: '0',
            }}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={5}>
          <InputNumber
            min={0}
            max={50}
            style={{
              margin: '0 9px',
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  };


  return <>
  {/* <Navigate replace to="/authorization" /> */}
    <Layout>
        <MainHeader/>
        <>
            <Content 
              style={{
                height: '100%',
                paddingInline: '200px',
              }}
            >
                <Content>
                  <h1 
                    style={{
                        fontSize: '36px',
                        marginTop: '40px',
                    }}
                  > 
                    Поиск видео 
                  </h1>
                  <Search
                    placeholder="Что хотите посмотреть?"
                    defaultValue={searchTerm}
                    enterButton="Найти"
                    size="large"
                    suffix={suffix}
                    // value = {inputValue}
                    // onChange={(e) => setInputValue(e.target.value)}
                    // onSearch={() => handleSearch()}
                  />
                </Content> 
                <Content 
                  style={{
                    marginTop: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}
                >
                  <p
                    style={{
                      marginBottom: 0,
                      display: 'flex'
                    }}
                  >
                    Видео по запросу <span style={{fontWeight:'bold', marginLeft:'5px', marginBottom:0}}>"{searchTerm}"</span>
                  </p>
                  <Segmented
                    onChange={() => setList(!list)}
                    options={[
                      {
                        value: 'List',
                        icon: <BarsOutlined />,
                      },
                      {
                        value: 'Kanban',
                        icon: <AppstoreOutlined />,
                      },
                    ]}
                  />
                </Content>
                
                  {list ?
                    <VideoList videos={videos}/> 
                    : 
                    <VideoCards videos={videos}/>
                  }
            </Content>
              
        </>   
    </Layout>
    <Modal
      style={{textAlign:'center'}}
      title="Сохранить запрос"
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Не сохранять
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Сохранить
        </Button>
      ]}
    >
      <Form
      layout='vertical'
      form={form}
      initialValues={{
        layout: 'vertical',
      }}
    >
      <Form.Item label="Запрос">
        <Input placeholder={searchTerm} disabled />
      </Form.Item>
      <Form.Item name='name' label="Название" rules={[{ required: true }]}>
        <Input placeholder="Укажите название" />
      </Form.Item>
      <Form.Item
        label="Сортировать по"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{textAlign: 'left'}}
          placeholder="Без сортировки"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <IntegerStep/>
    </Form>
    </Modal>
  </>
};

export default SearchResults;