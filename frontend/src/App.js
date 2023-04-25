import './styles/styles.css';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Header from './components/Header';
import { Link } from "react-router-dom";


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
    <body className="App">
      

      {/*<header className="App-header">
       <AppBar position="fixed" top='0' sx={{ display: isMobile ? 'block' : 'none'}}>
        <Toolbar>
        <Link to={`/home`}><Typography variant="h6" component="div" align='left'  sx={{ flexGrow: 1 }}>
            Gestion Immo
          </Typography></Link>
          <MoreVertIcon onClick={handleClick} />
            <Menu         MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
              <MenuItem>
              <Link to={`/flats`}><Button color="inherit"><HomeWorkIcon /></Button></Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/tenants`}><Button color="inherit"><EscalatorWarningIcon /></Button></Link>
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
            <Link to={`/home`}>Gestion Immo</Link>
          </Typography>
              <Link to={`/flats`}><Button color="inherit" title="Appartements"><HomeWorkIcon /></Button></Link>
              <Link to={`/tenants`}><Button color="inherit" title="Locataires"><EscalatorWarningIcon /></Button></Link>
              <Button color="inherit" title="Se déconnecter"><LogoutIcon /></Button>
        </Toolbar>
      </AppBar> 
      </header>*/}
    </body>
  );
}
