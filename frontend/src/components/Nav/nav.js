import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import './nav.css'

function Nav(props) {

    const navigate = useNavigate();
    const initialState = [<h1><Link to='/'>oChain</Link></h1>]

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

          <button>
          <li className="nav-item" key="3">
            <Link className='nav-link' to="/login">Login</Link>
          </li>
          </button>,
          
          <button>
          <li className="nav-item" key="4">
            <Link className='nav-link' to="/signup">Signup</Link>
          </li>
          </button>,
        ])
      );
    }
  }, [props.isLoggedIn])

    return (
        <div>
            <ul>
                {navItems}
            </ul>
        </div>
    )
}

export default Nav