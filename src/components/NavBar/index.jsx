import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

const pages = ['camisetas', 'pelotas', 'botines'];

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor:'#282828'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box className='buttonLogoContainer'>
            <Button>
              <Link to={'/'} ><img className='logo' src='https://i.postimg.cc/VNHnMqLS/logo.png' alt='logo'/></Link>
            </Button>
          </Box>
          <Typography 
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }} >
            <Link className='brand' to= {"/"} >ff-side</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit" >
              <MenuIcon sx={{ color: '#78546a' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  height: '100vh',
                  width: '40vw',
                  backgroundColor: '#282828',
                  boxShadow: 'none',
                  left: '0px !important',
                  top: '62px !important'
                },
                '& .MuiList-root': {
                  height: '100%',
                  padding: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly'
                },
                '& .MuiMenuItem-root': {
                  fontSize: { xs: '1rem', sm: '1.4rem'},
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }
              }} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link className='categoryMenu' to={`/category/${page}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className='buttonLogo2Container'>
            <Button>
              <Link to={'/'} ><img className='logo2' src='https://i.postimg.cc/VNHnMqLS/logo.png' alt='logo' /></Link>
            </Button>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }} >
            <Link className='brand' to= {"/"} >ff-side</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#17181a', display: 'block', fontSize: '18px', textDecoration: 'none'}} >
                <Link className='categoryName' to={`/category/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <CartWidget/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};