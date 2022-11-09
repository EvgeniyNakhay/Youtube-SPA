import './App.css';
import Authorization from './pages/Authorization/Authorization';
import MainPage from './pages/MainPage/MainPage';
import Favourites from './pages/Favourites/Favourites';
import SearchResults from './pages/SearchResults/SearchResults';
import { Routes,Route} from 'react-router-dom';
import  PrivateRoute  from './hoc/index';

const App = () => {

  return (
    <Routes>
      <Route path='/login' element={<Authorization/>}/>
          <Route 
            path='/'
            element={
              <PrivateRoute>
                <MainPage/>
              </PrivateRoute>
            }
          />
          <Route 
            path='/favourite' 
            element={
              <PrivateRoute>
                <Favourites/>
              </PrivateRoute>
            }
          />
          <Route 
            path="/search/:searchTerm" 
            element={
                <SearchResults/>
            }
          />
    </Routes>
  );
  
};

export default App;

