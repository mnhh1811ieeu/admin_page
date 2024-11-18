import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import SignUp from './pages/SignUp';

const MyContext = createContext();

function App() {

    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isHideSiderbarAndHeader, setisHideSiderbarAndHeader] = useState(false);
    

    const values ={
      isToggleSidebar,
      setIsToggleSidebar,
      isLogin,
      setIsLogin,
      isHideSiderbarAndHeader,
      setisHideSiderbarAndHeader
    }

 
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSiderbarAndHeader !== true && <Header/>
        }
        
        <div className="main d-flex">
          {
            isHideSiderbarAndHeader !== true && 
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Sidebar/>
          </div>
          }
          
            
          <div className={`content ${isHideSiderbarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard/>}/>
              <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
              <Route path="/login" exact={true} element={<Login/>}/>
              <Route path="/signup" exact={true} element={<SignUp/>}/>
            </Routes>
          </div>

        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};