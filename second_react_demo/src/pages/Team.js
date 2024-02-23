
import { useState } from 'react';
import './css/Home.css'
import { Link } from 'react-router-dom'


function Team() {

    const [home, setHome] = useState(0);

    function updateHome(id) {
        setHome(id);
    }
    
    return (
        <div className="page">
            
            <div className="sidebar">

            <ul>
                  <li className='sidebar-list' onClick={() => updateHome(1)}>
                  <Link to="/Team" className='llink'>
                          Team 1
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(2)}>
                  <Link to="/Team" className='llink'>
                          Team 2
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(3)}>
                  <Link to="/Team" className='llink'>
                          Team 3
                      </Link>
                  </li>
                  <li className='sidebar-list' onClick={() => updateHome(4)}>
                  <Link to="/Team" className='llink'>
                          Team 4
                      </Link>
                  </li>
              </ul>
            </div>

            <div className={home === 0 ? "show-content" : "sidebar-list-content"}>
                <h1>Team Page</h1>
            </div>
            <div className={home === 1 ? "show-content" : "sidebar-list-content"}>
                <h1>Team 1</h1>
            </div>
            <div className={home === 2 ? "show-content" : "sidebar-list-content"}>
                <h1>Team 2</h1>
            </div>
            <div className={home === 3 ? "show-content" : "sidebar-list-content"}>
                <h1>Team 3</h1>
            </div>
            <div className={home === 4 ? "show-content" : "sidebar-list-content"}>
                <h1>Team 4</h1>
            </div>
        </div>
    );

    
}

export default Team;

