import {Routes,Route} from 'react-router-dom';
import './App.css';
import SplashScreen from './Components/splashscreen';
import Login from './Components/LogIn/Login'
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/HoomeScreen/NavBar';
import AccountMenu from './Components/HoomeScreen/AccoutMenu';
import ChangePass from './Components/HoomeScreen/ChangePass';

function App() {

  
  return (
    <>
      <Routes>
      <Route path="/" element={<SplashScreen/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/navbar/accountmenu" element={<AccountMenu/>}  />
        <Route path='/navbar/accountmenu/settings/ChangePass' element={<ChangePass/>} />
      </Routes>
    </>
  );
}

export default App;
