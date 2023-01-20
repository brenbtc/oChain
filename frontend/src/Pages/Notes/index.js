import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showNote, deleteNote } from '../../utils/api';


import './index.css'

function Notes() {
    const [notes, setNotes] = useState([]);

    async function getNotes() {
    await showNote().then((data) => setNotes(data));
  }

  useEffect(() => {
    getNotes();
    
    })
  

   


    const handleDelete = (note) => {
        deleteNote()
        .then((res) => {
            console.log(res)
        }, [])
    }
    // axios
    //     .delete(`http://localhost:3000/todos/${todoData._id}`)
    //     .then(() =>{
    //         axios
    //             .get('http://localhost:3000/todos')
    //             .then((response) =>{
    //                 setTodos(repsonse.data)
        //         })
        // })

 

    return (
        <main className='notes'>
            <header className='header'>
                <h4><strong>Notes</strong></h4>
            </header>
            <div className='row'>
            {notes.map((note, i) => (
                <div className='col s12 m5'>
                    <div key={i} className='card-panel'>
                            <span className='card-title'><h6><strong>{note.title}</strong></h6></span>
                            <p>{note.body}</p>
                        <button
                         className='btn-flat yellow-text text-darken-4'>
                            Edit
                        </button>
                        <button 
                        className='btn-flat red-text text-accent-4'
                        onClick={handleDelete}
                        >
                            Del
                        </button>
                    </div>
                </div>

        ))}
        <br/>
        </div>
        <button><a href='/make'>CreateNote</a></button>
    </main>
    )
}

export default Notes