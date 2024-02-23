// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Team from './pages/Team';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
            <header>
              <ul className='ulist'>
                  <li className='lists'>
                      <Link to="/Home">Home</Link>
                  </li>
                  <li className='lists'>
                      <Link to="/Abouts">
                          About Us
                      </Link>
                  </li>
                  <li className='lists'>
                      <Link to="/Contact">
                          Contact Us
                      </Link>
                  </li>
                  <li className='lists'>
                      <Link to="/Team">
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
            </Routes>
        </div>
    </Router>
);
}

export default App;
