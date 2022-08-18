import './App.css';
import Register from './routes/register/Register';
import Signin from './routes/signin/Signin';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Weather from './routes/weather/Weather';
import { Routes, Route } from 'react-router-dom';
import Profile from './routes/profile/Profile';

function App() {
  return (
    <div className='App-header '>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
