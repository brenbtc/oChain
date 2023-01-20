import { useEffect,useState } from "react"
import { createNote } from "../../utils/api"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import './index.css'

function MakeNote() {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })
    
    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        createNote(formData)
        console.log(formData)
        navigate('/notes')
    }

    return (
        <main className="row">
            <div  className="col">
                <div className="card">
                    <div className="card-action"></div>
                    <h4 className="title"><strong>Create Note</strong></h4>
                            <form>
                            <div className="card-content">
                                <input 
                                name="title"
                                type='text'
                                value={formData.title}
                                onChange={handleChange}
                                className='validate'
                                placeholder="Title"
                                required
                                />
                            </div>
                            <div className="card-content">
                                <input 
                                name="body"
                                type='text'
                                value={formData.body}
                                onChange={handleChange}
                                className='validate'
                                placeholder="Note"
                                required
                                />
                            </div>
                                <button onClick={handleSubmit} className="btn signup-btn">Create Note</button>
                            </form>
                </div>
            </div>
        </main>
        
    )
}

export default MakeNote