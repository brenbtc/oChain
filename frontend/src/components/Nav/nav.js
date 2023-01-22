import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './nav.css'

function Nav(props) {

    const navigate = useNavigate();
    const initialState = []

    const handleLogOut = () => {
        localStorage.clear();
        props.setLoggedIn(false);
        navigate("/", { replace: true });
      }

      const [navItems, setNavItems] = useState(initialState)

  useEffect(() => {
    if (props.loggedIn) {
      setNavItems(
        initialState.concat(
          // <li key='1'>
          //   <Link to="/watchlist" className='btn-flat'>Watchlist</Link>
          // </li>,
          <li key='11'>
          <Link to="/notes" className='btn-flat'>Notes</Link>
        </li>,
          <li key="2">
            <button onClick={handleLogOut} className='btn-flat'>
              Logout
            </button>
          </li>
        )
      );
    } else {
      setNavItems(
        initialState.concat([
          <li className="nav-item" key="3">
            <Link className='nav-link btn-flat' to="/login">Login</Link>
          </li>,
          
        
          <li className="nav-item" key="4">
            <Link className='nav-link btn-flat' to="/signup">Signup</Link>
          </li>,
        ])
      );
    }
  }, [props.loggedIn])

    return (
      <main>
        <nav>
          <div className='nav-wrapper'>
            <h5 className='brand-logo'><Link to='/'className='btn-flat'>oChain</Link></h5>
              <ul className='right'>
                  {navItems}
              </ul>
          </div>
        </nav>
      </main>
    )
}

export default Nav