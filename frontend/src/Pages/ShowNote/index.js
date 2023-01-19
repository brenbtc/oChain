// import { useEffect, useState } from 'react';
// import { showNote } from '../../utils/api';


function ShowNote(props) {
    // const [currentNote, setCurrentNote] = useState({})

    // let { id } = useParams();
    // id = parseInt(id)

    // useEffect (() => {
    //     showNote(props.allEndpoints.url)
    //         .then(data => setCurrentNote(data))
    //         .catch(err => console.error('Error from showNote: ', err))
    //     props.setCurrentNote(id)
    // }, [id, props])

    return (
        <div className='show-note-page'>
        <h1>Viewing note</h1>
{/* 
        <h2>{currentNote.header}</h2>
        <p>{currentNote.body}</p>
         */}
        </div>
    )
}

export default ShowNote