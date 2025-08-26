import {useState, useEffect} from "react"
import Footer from "./components/Footer"
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes.js'


const App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    const hook = () => {
        // console.log('effect')
        noteService
            .getAll()
            .then(initialNotes => {
                // console.log('hook',initialNotes)
                setNotes(initialNotes)
            })
    }

    useEffect(hook, []);

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }

        noteService.create(noteObject).then(resp =>{
                setNotes(notes.concat(resp))
                setNewNote('')
            })
    }

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note,important: !note.important}

        noteService
            .update(id,changedNote)
            .then(returnNote=>{
                setNotes(notes.map(note => note.id !== id ? note : returnNote))
            })
            .catch(error =>{
                setErrorMessage(
                    `Note '${note.content}' ya ha sido borrada del servidor.`
                )
                setTimeout(() =>{setErrorMessage(null)},5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id}
                          note={note}
                          toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">Save</button>
            </form>
            <Footer/>
        </div>
    )
}

export default App
