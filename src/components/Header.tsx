import { AppBar, Toolbar, Typography } from '@mui/material';
import { logo } from '../constants/constants';

const Header: React.FC = () => {
  return (
    <AppBar
      color="transparent"
      elevation={1}
      position="static"
    >
      <Toolbar>
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Typography style={{ fontSize: 25 }}>IdeaBox</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
