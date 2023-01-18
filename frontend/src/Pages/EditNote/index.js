import { useEffect, useState } from 'react';
import axios from 'axios';

function EditNote({note}) {
    const [noteState, setNoteState] = useState({})
    const [editState, setEditState] = useState({})
    
    useEffect(() => {
        setEditState(note)
        setNoteState(note)
    }, [note])

    const handleChange = (e) => {
        setEditState({ ...editState, [e.target.id]: e.target.value })
    }

    // handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const config = {
    //         headers:{
    //             'Aithorization': localStorage.getItem('token')
    //         }
    //     };
    //     const res = await axios.put(`http://localhost:3000/editnote/${note.id}`, editState, config)
    //     console.log(res)
    //     setNoteState(res.data)
    // }
    return (
        <div>
            <div>

            </div>
            <div>
            {/* onSubmit={handleSubmit} */}
                <form className='editNote' >  
                    <div>
                        <lable htmlFor='header'>Title:</lable>
                        <input id='header' type='text' value={editState.title} onChange={handleChange} />
                    </div>
                    <div>
                    <lable htmlFor='body'>Note:</lable>
                        <input id='body' type='text' value={editState.body} onChange={handleChange} />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditNote