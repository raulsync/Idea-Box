import { Box, Button, InputBase, styled } from '@mui/material';

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

const CreateNote: React.FC = () => {
  return (
    <>
      <Container>
        <InputBase
          type="text"
          placeholder="Title"
        />
        <Box component={'span'}>30</Box>
        <InputBase
          type="text"
          placeholder="Details"
        />
        <Box component={'span'}>50</Box>
        <InputBase type="color" />
        <Button variant="contained">Create</Button>
      </Container>
    </>
  );
};

export default CreateNote;
