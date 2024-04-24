import { Box, Typography } from '@mui/material';
import { IState } from '../models/note';
import Note from './Note';

interface INotesPropsType {
  notes: IState[];
  deleteNote: (id: string) => void;
}
const Notes: React.FC<INotesPropsType> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      {notes?.map((note) => (
        <Note
          note={note}
          key={note.id}
          deleteNote={deleteNote}
        />
      ))}
    </Box>
  );
};

export default Notes;
