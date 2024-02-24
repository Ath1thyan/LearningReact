import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
            <header>

            <div className='l'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <ul className='ulist'>
                <li className='lists'>
                    <Link to="/Home" className='lists'>Home</Link>
                </li>
                <li className='lists'>
                    <Link to="/Abouts" className='lists'>
                        About Us
                    </Link>
                </li>
                <li className='lists'>
                    <Link to="/Contact" className='lists'>
                        Contact Us
                    </Link>
                </li>
                <li className='lists'>
                    <Link to="/Team" className='lists'>
                        Team
                    </Link>
                </li>
            </ul>
            </header>
         
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                    
                ></Route>
                <Route
                    exact
                    path="/Home"
                    element={<Home />}
                    
                ></Route>
                <Route
                    exact
                    path="/Abouts"
                    element={<Abouts />}
                    
                ></Route>
                <Route
                    exact
                    path="/Contact"
                    element={<Contact />}
                    
                ></Route>
                <Route
                    exact
                    path="/Team"
                    element={<Team />}
                    
                ></Route>
                <Route
                    path="*"
                    element={<ErrorPage />}
                />
            </Routes>
        </div>
    </Router>
);
}

export default App;