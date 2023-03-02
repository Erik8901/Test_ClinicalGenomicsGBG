import React, { useState } from 'react';

import './App.css';

function App() {
  const [newNote, setNewNote] = useState('');
  const [notesList, setNotesList] = useState([{
    id: 0,
    Title: "Buy Butter",
    Remove: <button className="note-delete" onClick={() => removeNote(0)}>Delete</button>
  },
  {
    id: 1,
    Title: "Change a lamp",
    Remove: <button className="note-delete" onClick={() => removeNote(1)}>Delete</button>
  },
  {
    id: 2,
    Title: "Buy milk",
    Remove: <button className="note-delete" onClick={() => removeNote(2)}>Delete</button>
  }]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = () => {
    const newId = notesList.length + 1;
    const noteObject = {
      id: newId,
      Title: newNote,
      Remove: <button className="note-delete" onClick={() => removeNote(newId)}>Delete</button>
    }

    const arr = [...notesList];
    arr.push(noteObject);
    setNotesList(arr);
    setNewNote("");
  }

  const removeNote = (id) => {
    setNotesList((current) =>
      current.filter((note) => note.id !== id)
    );
  }

  return (
    <div className="App">
      <h1>Note app</h1>
      <div className="inputs">
        <input type="text" placeholder="Add your note" onChange={handleChange}
          value={newNote} />
        <button className="add-btn" onClick={() => addNote()} >Add New Note</button>
      </div>

      {notesList.length === 0 ? <h2>Enter a Note</h2> : null}
      <div className="list-container">
        {notesList.map((item, index) => {
          return <div className="note" key={index}>
            <span className="note-title">
              {item.Title}
            </span>
            <span>
              {item.Remove}
            </span>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;