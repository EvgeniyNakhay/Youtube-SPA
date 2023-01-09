import {Layout, Input, Segmented, Button, Modal, Form, Select, Col, Row, Slider, InputNumber} from 'antd';
import React, {useState, useEffect} from 'react';
import {HeartOutlined, AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import MainHeader from '../../components/MainHeader/MainHeader';
import VideoList from '../../components/VideosView/VideoList';
import VideoCards from '../../components/VideosView/VideoCards';
import { useDispatch, useSelector } from 'react-redux';
import { setQueryF, setQueryNameF, setSortByF } from '../../redux/actions/favRequest';
import {setRequestedVideos} from '../../redux/actions/requestedVideos';
import { setSearchTerm } from '../../redux/actions/searchTermAction';
const { Option } = Select;
const { Content} = Layout;
const { Search } = Input;
// const onSearch = (value) => console.log(value);

const SearchResults = () => {

  const [list, setList] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.searchTerm);
  const queryF = useSelector((store) => store.queryF)
  const nameF = useSelector((store) => store.nameF);
  const sortByF = useSelector((store) => store.sortByF);
  // const [data, setData] = useState([]);
  const requestedVideos = useSelector((store) => store.requestedVideos);
  const [maxResult, setMaxResult] = useState(1);
  const order = ['relevance', 'date', 'rating', 'title', 'videoCount', 'viewCount']
  
  const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'; 
  // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`;
  
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        dispatch(setRequestedVideos(requestedVideos.concat(body.results)));
        console.log(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, [searchTerm]);
  
  // useEffect(() => {
  //   fetchFromAPI();
  // }, [searchTerm]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTerm));
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    dispatch(setQueryNameF(value));
  }

  const handleChangeSortBy = (value) => {
    value = {sortByF};
    dispatch(setSortByF(value));
    console.log(sortByF)
  }


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
  
    const onChange = (newValue) => {
      setMaxResult(newValue);
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
            value={typeof maxResult === 'number' ? maxResult : 0}
          />
        </Col>
        <Col span={5}>
          <InputNumber
            min={0}
            max={50}
            style={{
              margin: '0 9px',
            }}
            value={maxResult}
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
                    value = {searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    onSearch={handleSearch}
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
                    <VideoList/> 
                    : 
                    <VideoCards/>
                  }
            </Content>
      </Layout>
    {isModalOpen && 
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
        <Input 
          placeholder={searchTerm} 
          disabled />
      </Form.Item>
      <Form.Item 
        name='name' 
        label="Название" 
        rules={[{ required: true }]}
      >
        <Input 
          placeholder="Укажите название"
          value={nameF}
          onChange={handleChangeName}/>
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
          defaultValue='rating'
          style={{textAlign: 'left'}}
          onChange={handleChangeSortBy}
          options={[
            {
              value: 'date',
              label: 'Дате',
            },
            {
              value: 'rating',
              label: 'Рейтингу',
            },
            {
              value: 'relevance',
              label: 'Актуальности',
            },
            {
              value: 'title',
              label: 'Названию',
            },
            {
              value: 'videoCount',
              label: 'Количеству видео',
            },
            {
              value: 'viewCount',
              label: 'Количеству просмотров',
            },
          ]}/>
      </Form.Item>
      <IntegerStep/>
    </Form>
    </Modal>
    }
  </>
};

export default SearchResults;