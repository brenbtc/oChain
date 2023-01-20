import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showNote, deleteNote, updateNote } from '../../utils/api';


import './index.css'

function Notes() {
    const [notes, setNotes] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editnote, setEditNote] = useState({
        title: "",
        body: "",
        id: "",
        });

    async function getNotes() {
    await showNote().then((data) => setNotes(data));
  }

  useEffect(() => {
    getNotes();
    
    })
  
    const handleDelete = (note) => {
        deleteNote(note._id)
        .then((res) => {
            console.log(res)
        }, [])
    }
    const handleUpdate = () => {
        if (editnote.title === "" || editnote.body === "") {
          alert("Please fill out all fields");
        } else {
          setEdit(false);
          updateNote(editnote).then((res) => {
            console.log(res);
          }, []);
        }
    }
    const handleChange = (e) => {
        setEditNote({
            ...editnote,
            [e.target.name]: e.target.value,
        });
    }


    return (
      <main className="notes">
        <header className="header">
          <h4>
            <strong>Notes</strong>
          </h4>
        </header>
        <div className="row">
          {notes?.map((note) => (
            <div className="col-4" key={note?._id}>
              <div
                className="card"
                style={{
                  width: "15rem",
                  height: "10rem",
                  margin: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                }}
              >
                <div className="card-body">
                  {/* create editable fields */}
                  {edit ? (
                    <input
                      defaultValue={note?.title}
                      type="text"
                      name="title"
                      onChange={(e) =>handleChange(e)}
                      style={{justifyContent: "center",alignItems: "center",textAlign: "center",height: "30%",width: "100%",}}
                    />
                  ) : (
                    <h5 className="card-title">{note?.title}</h5>
                  )}
                  {edit ? (
                    <input
                      type="text"
                      name="body"
                      defaultValue={note?.body}
                      onChange={(e) => handleChange(e)}
                      style={{justifyContent: "center",alignItems: "center",textAlign: "center",width: "100%",height: "30%",}}
                    />
                  ) : (
                    <p className="card-text">{note?.body}</p>
                  )}

                  <div
                    className="card-footer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "0.5rem",
                    }}
                  >
                    <button
                      className="btn "
                      onClick={(e) => handleDelete(note)}
                    >
                      Delete
                    </button>
                    {edit ? (
                      <button
                        className="btn "
                        onClick={(e) => handleUpdate(editnote)}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn "
                        onClick={(e) => {
                          setEdit(true);
                          setEditNote({
                            title: note?.title,
                            body: note?.body,
                            id: note?._id,
                          });
                        }}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className='create'>
          <a href="/make" className='btn'>Create Note</a>
        </button>
      </main>
    );
}

export default Notes