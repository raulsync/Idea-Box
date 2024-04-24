import { useState } from 'react';
import { Box, Button, InputBase, Typography, styled } from '@mui/material';
import { IState } from '../models/note';
import { v4 as uuid } from 'uuid';

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type='text'] {
    border-bottom: 1px solid black;
    opacity: 0.5;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type='color'] {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

const initialState = {
  id: 1,
  title: '',
  detail: '',
  color: '',
  date: new Date().toLocaleString().toString(),
};

interface ICreateNotePropsType {
  addNote: (note: IState) => void;
}

const CreateNote: React.FC<ICreateNotePropsType> = ({ addNote }) => {
  const [note, setNote] = useState<IState>(initialState);

  const [error, setError] = useState<string>('');

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (error) {
      setError('');
    }
    setNote({ ...initialState, [e.target.name]: e.target.value });
    console.log(note);
  };

  const onCreateNote = () => {
    if (!note.title && !note.detail) {
      setError('all fields are manadatory');
      return;
    }
    addNote({ ...note, id: Number(uuid()) });
    console.log(note);

    // setNote(initialState);
  };

  return (
    <>
      <Container>
        <InputBase
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => onChangeHandler(e)}
        />
        <Box component={'span'}>30</Box>
        <InputBase
          type="text"
          placeholder="Detail"
          name="detail"
          onChange={(e) => onChangeHandler(e)}
        />
        <Box component={'span'}>50</Box>
        <InputBase
          type="color"
          value="#ffffff"
          name="color"
          onChange={(e) => onChangeHandler(e)}
        />
        <Button
          variant="contained"
          onClick={() => onCreateNote()}
        >
          Create
        </Button>
        {error && (
          <Typography
            style={{
              fontSize: '1rem',
              backgroundColor: 'red',
              color: '#fff',
              width: '50%',
              padding: 10,
            }}
          >
            {error}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default CreateNote;
