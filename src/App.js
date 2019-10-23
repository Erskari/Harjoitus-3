import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [notes, setNotes] = useState([]);
  const getNotes = () => {
  console.log("Starting effect");
  axios
  .get('http://localhost:3001/notes')
  .then(response => {
    //const notes = response.data
    console.log("promise fulfilled");
    setNotes(response.data);
  })};

  useEffect(getNotes, []);

  console.log("ready", notes);

  // testing addnote
  const addNote = event => {
  const testNote = {
    content: "Remember to sleep",
    date: "2019-10-23T14:06:00.000Z",
    important: true
  };
  axios
  .post('http://localhost:3001/notes', testNote)
  .then(response => {
    console.log(response);
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>JSON server with notes</h1>
      </header>
      <button onClick={e => addNote(e)}>Click me</button>
    </div>
  );
}

export default App;
