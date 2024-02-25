
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import NewBooks from './components/NewBooks';
import OldBooks from './components/OldBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/books/old-books">Old Books</Link></li>
          <li><Link to="/books/new-books">New Books</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />
          <Route path='/books' >
            <Route path='old-books' element={<OldBooks/>} />
            <Route path='new-books' element={<NewBooks/>} />
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
