import React from 'react';
import '../App.css';
import noteService from '../services/notes';
const Note = ({note, handleDelete, handleChange}) => {
    let textColor = "notimportant";
    if(note.important) {
        textColor = "important";
        } else {
        textColor = "notimportant";
        }
        return (
            <li onClick={e => handleChange(e, note.id)} className={textColor}> {note.content} ({note.important ? "TÄRKEÄ" : "EVVK"})
            <button onClick={e => handleDelete(e, note.id)}>Poista</button>
            </li>
        )
}
 
const Notes = ({notes, setNotes}) => {
    const handleDelete = (e, id) => {
        e.stopPropagation();
        noteService.remove(id)
        .then(resp => setNotes(notes.filter(n => n.id != id)))
    }

    const handleChange = (e, id) => {
        e.stopPropagation();
        const tempNote = notes.filter(n => n.id === id)[0]
        noteService.update(id, {...tempNote, important: !(tempNote.important)})
        .then(updatedNote => setNotes(notes.map(n => {
            if(n.id === id){
                n = updatedNote
            }
            return n;
        })))
    }

    return (
    <div className="part">
        <ul className="notes">
            {notes.map(note => <Note handleChange={handleChange} handleDelete={handleDelete} note={note} key={note.id} />)}
        </ul>
    </div>
    )
}
 
export default Notes;