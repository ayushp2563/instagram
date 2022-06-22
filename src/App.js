import {Routes,Route} from 'react-router-dom';
import './App.css';
import SplashScreen from './Components/splashscreen';
import Login from './Components/LogIn/Login'
import SignUp from './Components/SignUp/SignUp';

function App() {

  
  return (
    <>
      <Routes>
      <Route path="/" element={<SplashScreen/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
    </>
  );
}

export default App;
