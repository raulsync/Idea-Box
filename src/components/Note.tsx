import { Button, Card, CardContent, Typography } from '@mui/material';
import { IState } from '../models/note';

interface INoteProps {
  note: IState;
}

const Note: React.FC<INoteProps> = ({ note }) => {
  return (
    <Card style={{ backgroundColor: note.color }}>
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>
        <Typography>{note.detail}</Typography>
        <Typography>{note.date}</Typography>
        <Button variant="contained">Delete</Button>
      </CardContent>
    </Card>
  );
};

export default Note;
