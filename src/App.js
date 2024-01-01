import React, { useState } from 'react';
import Header from './components/Header';
import NoteEditor from './components/NoteEditor';
import NoteDisplay from './components/NoteDisplay';
import TodoList from './components/TodoList';

function App() {
  const [notes, setNotes] = useState([]);

  // Function to handle saving notes
  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <Header />
      <NoteEditor onSave={handleSaveNote} />
      <NoteDisplay notes={notes} />
      <TodoList />
    </div>
  );
}

export default App;
