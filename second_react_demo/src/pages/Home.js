
import { useState } from 'react';
import './css/Home.css'
import { Link } from 'react-router-dom'


function Home() {

    const [home, setHome] = useState(0);

    function updateHome(id) {
        setHome(id);
    }
    
    return (
        <div className="page">
            
            <div className="sidebar">

            <ul>
                  <li className='sidebar-list' onClick={() => updateHome(1)}>
                  <Link to="/" className='llink'>
                          Home1
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(2)}>
                  <Link to="/" className='llink'>
                          Home2
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(3)}>
                  <Link to="/" className='llink'>
                          Home3
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(4)}>
                  <Link to="/" className='llink'>
                          Home4
                      </Link>
                  </li>
              </ul>
            </div>

            <div className={home === 0 ? "show-content" : "sidebar-list-content"}>
                <h1>Home Page</h1>
            </div>
            <div className={home === 1 ? "show-content" : "sidebar-list-content"}>
                <h1>Home1</h1>
            </div>
            <div className={home === 2 ? "show-content" : "sidebar-list-content"}>
                <h1>Home2</h1>
            </div>
            <div className={home === 3 ? "show-content" : "sidebar-list-content"}>
                <h1>Home3</h1>
            </div>
            <div className={home === 4 ? "show-content" : "sidebar-list-content"}>
                <h1>Home4</h1>
            </div>
        </div>
    );

    
}

export default Home;

