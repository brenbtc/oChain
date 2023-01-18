import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './watchlist.css'

function Watchlist(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn) {
            navigate('/')
        }
    }, [props.loggedIn])

    return (
        <main className='watchlist-page'>
            <header className='header'>
                <h4>MY WATCHLIST</h4>
            </header>
        </main>
    )
}

export default Watchlist