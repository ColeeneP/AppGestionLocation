import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Home from './components/Home';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <div className="App">
      <header className="App-header">
      <AppBar position="fixed" top='0' sx={{ display: isMobile ? 'block' : 'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" align='left'  sx={{ flexGrow: 1 }}>
            Gestion Immo
          </Typography>
          <MoreVertIcon onClick={handleClick} />
            <Menu         MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
              <MenuItem>
                <Button color="inherit"><HomeWorkIcon /></Button>
              </MenuItem>
              <MenuItem>
              <Button color="inherit"><EscalatorWarningIcon /></Button>
              </MenuItem>
              <MenuItem>
              <Button color="inherit"><LogoutIcon /></Button>
              </MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>

      <AppBar position="fixed" top='0' sx={{ display: isMobile ? 'none' : 'block'}}>
        <Toolbar>
          <Typography variant="h6" component="div" align='left'  sx={{ flexGrow: 1 }}>
            Gestion Immo
          </Typography>
              <Button color="inherit" title="Appartements"><HomeWorkIcon /></Button>
              <Button color="inherit" title="Locataires"><EscalatorWarningIcon /></Button>
              <Button color="inherit" title="Se déconnecter"><LogoutIcon /></Button>
        </Toolbar>
      </AppBar>
      <Home />
      </header>
    </div>
  );
}
