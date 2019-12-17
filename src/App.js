import React, {useState, useEffect} from 'react';
import './App.css';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import noteService from './services/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newImportance, setNewImportance] = useState(false);


  const getNotes = () => {
    console.log("Starting effect");
    noteService.getAll()
    .then(allNotes => {
      setNotes(allNotes);
    })};
    
  useEffect(getNotes, []);
  // testing addnote
  const addNote = event => {
  const now = new Date();
  event.preventDefault();
  const testNote = {
    content: newNote,
    date: now.toISOString(),
    important: newImportance
  };
 noteService.add(testNote)
  .then(note => {
    let tempNotes = notes.concat(note);
    setNotes(tempNotes);
    setNewNote("");
    setNewImportance(false);
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSON server with notes</h1>
      </header>
      <body className="App-body">
        <Notes notes={notes} setNotes={setNotes} />
        <NewNote newNote={newNote} setNewNote={setNewNote} newImportance={newImportance} setNewImportance={setNewImportance} submitHandler={addNote}/>
        <button onClick={e => addNote(e)}>Lisää tiedot</button>
      </body>
    </div>
  );
}

export default App;
