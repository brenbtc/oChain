import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'

import './nav.css'

function Nav(props) {

    const navigate = useNavigate();
    const initialState = [<h1><Link to='/'className='brand-logo' >oChain</Link></h1>]

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
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>,
          <li key="2">
            <button onClick={handleLogOut}>
              Logout
            </button>
          </li>
        )
      );
    } else {
      setNavItems(
        initialState.concat([
          <li className="nav-item" key="3">
            <Link className='nav-link' to="/login">Login</Link>
          </li>,
          
        
          <li className="nav-item" key="4">
            <Link className='nav-link' to="/signup">Signup</Link>
          </li>,
        ])
      );
    }
  }, [props.loggedIn])

    return (
        <div className='nav-wrapper'>
            <ul>
                {navItems}
            </ul>
        </div>
    )
}

export default Nav