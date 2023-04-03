// import logo from './logo.svg';
import './pages/login/Facebook.css';

import './pages/login/Reg.css';
import Facebook from './pages/login/Facebook';
import Reg from './pages/login/Reg';
import Navbar from './components/Navbar';
import './components/Navbar.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Facebook/>}></Route>
      <Route path='/reg' element={<Reg/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;

