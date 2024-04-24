import { Box } from '@mui/material';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import Notes from './components/Notes';
import { IState } from './models/note';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState<IState[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
    }
  }, []);

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => id !== note.id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const addNote = (note: IState) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]));
  };

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNote={addNote} />
        <Notes
          notes={notes}
          deleteNote={deleteNote}
        />
      </Box>
    </>
  );
}

export default App;
