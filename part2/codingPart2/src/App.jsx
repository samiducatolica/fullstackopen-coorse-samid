import {useState, useEffect} from "react"
import Note from './components/Note'
import noteService from './services/notes.js'


const App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)

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

    console.log('render', notes.length, 'notes')

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }

        noteService
            .create(noteObject)
            .then(resp =>{
                setNotes(notes.concat(resp))
                setNewNote('')
            })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
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
                alert(`the note '${note.content} was already deleted from server`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
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
        </div>
    )
}

export default App
