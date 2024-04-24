import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from '@mui/material';
import { IState } from '../models/note';

interface INoteProps {
  note: IState;
  deleteNote: (id: string) => void;
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Wrapper = styled(Box)`
  & > button {
    margin-top: 5px;
  }
`;

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
  return (
    <StyledCard style={{ backgroundColor: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography variant="h6">{note.title}</Typography>
          <Typography>{note.detail}</Typography>
          <Typography>{note.date}</Typography>
          <Button
            variant="contained"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
