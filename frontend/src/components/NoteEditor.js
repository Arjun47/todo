// NoteEditor.js

import React, { useState } from 'react';

const NoteEditor = ({ onSave }) => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    onSave(note);
    setNote(''); // Clear input after saving
  };

  return (
    <div>
      <h2>Note Editor</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
        rows={5}
        cols={40}
      ></textarea>
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default NoteEditor;
