import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Students from './components/Students.jsx';
import Parents from './components/Parents';
import Warden from './components/Warden';
import Security from './components/Security';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/students' element={<Students />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/warden' element={<Warden />} />
        <Route path='/security' element={<Security />} />
      </Routes>
    </Router>
  );
}

export default App;
