import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Input, Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from "../../redux/actions/searchTermAction";
const { Content} = Layout;
const { Search } = Input;

const MainInput = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.searchTerm);       
  // const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {   
    searchTerm && navigate(`/search/${searchTerm}`)
  }

  return (
    <Layout>
      <Row >
        <Col span={12} offset={6}>
          <Content
            className="site-layout"
            style={{
              marginTop: '170px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              verticalAlign: 'middle',
            }}
          >
            <h1 
              style={{
                  fontSize: '36px',
                  paddingBottom: '40px',
                  marginBottom: 0,
              }}
            > 
              Поиск видео 
            </h1>

            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              value={searchTerm}
              size="large"
              onSearch={handleSearch}
            />
          </Content>
        </Col>
      </Row>  
    </Layout>  
  )
}

export default MainInput;