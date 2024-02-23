
import './css/Home.css'
import { Link } from 'react-router-dom'


function Home() {
    
    return (
        <div className="page">
            
            <div className="sidebar">

            <ul>
                  <li>
                  <Link to="/Home/Home1">
                          Home1
                      </Link>
                  </li>
                  <li>
                  <Link to="/Home/Home2">
                          Home2
                      </Link>
                  </li>
                  <li>
                  <Link to="/Home/Home3">
                          Home3
                      </Link>
                  </li>
                  <li>
                  <Link to="/Home/Home4">
                          Home4
                      </Link>
                  </li>
              </ul>
            </div>

            <div className="main">
                <h1>Home Page</h1>
            </div>
        </div>
    );

    
}

export default Home;