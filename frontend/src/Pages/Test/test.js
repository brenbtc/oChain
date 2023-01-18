import { useEffect,useState } from "react"
import { createNote } from "../../utils/api"
import axios from "axios"

function Test() {

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
    
    }

    return (
        <div >
            <h4>My Test</h4>
            <div>
                <form>
                    <input 
                    name="title"
                    type='text'
                    value={formData.title}
                    onChange={handleChange}
                    className='browser-default'
                    required
                    />

                    <input 
                    name="body"
                    type='text'
                    value={formData.body}
                    onChange={handleChange}
                    className='browser-default'
                    required
                    />

                    <button onClick={handleSubmit}>Create Note</button>
                </form>
            </div>
        </div>
        
    )
}

export default Test