import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/api';


function Notes(props) {
    
    const navigate = useNavigate()
    const [userData, setUserData] =useState({username: ''})
    const [usersNotes, setUsersNotes] =useeState([])


    useEffect(()=> {
        setUserData(props.currentUser.user)
        setUsersNotes(props.currentUser.Notes)
    },[props])


    
    return (
        <main className='learn-page'>
            <header className='header'>
                <h4><strong>My Notes</strong></h4>
            </header>
            <section>


                <button><a href='/make'>Create Note</a></button>
            </section>
        </main>
    )
}

export default Notes