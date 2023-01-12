
import { useState, useEffect } from 'react';
import { createNote, showNote } from '../../utils/api';

export default function Note(props) {
	const [formData, setFormData] = useState({ note: '' });
	const [showForm, setShowForm] = useState(true);
	const [note, setnote] =useState([]);
	const [displayNotes, setDisplayNotes] = useState(true)
	
	function getNotes() {showNote().then((data) => setnote(data))  
	}
    useEffect(() => {
		getNotes();
	}, [])

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		createChat(formData).then(() => getChats()).finally(() => 
        setFormData({ note: "" }));
	}

	
	return (
{/* <div>	
	<div>
	    <button onClick={()=>{setDisplayNotes(!displayNotes)}}></button>
	</div>
	{displayNotes ? <><div>
                <button onClick={() => { setShowForm(!showForm); } }>
                    <h1>Feel free to leave a note about the site here....</h1>
                </button>
                {showForm ? (
                    <form>
                        <input name='note' type='text' placeholder='...'
                            onChange={handleChange}
                            value={formData.note} />

                        <button onClick={handleSubmit}>
                            <h1>save and post</h1>
                        </button>
                    </form>
                ) : null}
            </div>
            <div>
					<h1><u>notes</u></h1>
					{console.log(note)}
					{note.map((note, i) => (
						
						<div key={i}> {note.user?.username || 'Unknown User'}: {note.note} </div>
                        
					))}
				</div>
			</> : null}
			
		</div>
			
</div> */}
	);
}