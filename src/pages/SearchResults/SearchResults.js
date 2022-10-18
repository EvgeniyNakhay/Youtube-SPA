import {Layout, Input, Segmented, Button, Modal, Form, Select, Col, Row, Slider, InputNumber } from 'antd';
import React, {useState} from 'react';
import {HeartOutlined, AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import VideoList from '../../components/VideosView/VideoList';
import VideoCards from '../../components/VideosView/VideoCards';
const { Option } = Select;
const { Content} = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchResults = () => {
  const [list, setList] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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
                    enterButton="Найти"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                  />
                </Content> 
                <Content 
                  style={{
                    marginTop: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <p
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    Видео по запросу
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
                    <VideoList/> 
                    : 
                    <VideoCards/>
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
        <Input placeholder="input placeholder" disabled />
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