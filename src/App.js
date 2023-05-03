import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './screens/main';
import About from './screens/like';
import Screen from './screens/poisk';
import Chong from './screens/profile';
import Like from './screens/like';
import Lenta from './screens/lenta';
import Profile from './screens/profile';
import Poisk from './screens/poisk';
import Public from './screens/public';
import Redactprofile from './screens/redactprofile';
import Setings from './screens/setings';
import Publ from './screens/publ';
import Profile2 from './screens/profile2';
import Stories from './screens/stories';
import Direct from './screens/direct';
import Chat from './screens/chat';
import Password from './screens/pasword';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/like' element={<Like/>}/>
              <Route path='/lenta' element={<Lenta/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/poisk' element={<Poisk/>}/>
              <Route path='/public' element={<Public/>}/>
              <Route path='/redactprofile' element={<Redactprofile/>}/>
              <Route path='/setings' element={<Setings/>}/>
              <Route path='/publ/:id' element={<Publ/>}/>
              <Route path='/profile2/:id' element={<Profile2/>}/>
              <Route path='/stories/:id' element={<Stories/>}/>
              <Route path='/direct' element={<Direct/>}/>
              <Route path='/chat' element={<Chat/>}/>
               <Route path='/password' element={<Password/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
