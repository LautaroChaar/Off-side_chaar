import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

export default function Footer() {
  return (
	<footer>
		<Box className='footerContainer' sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-evenly',
			borderTop: '4px solid #282828'
		 }} >
    	<Grid className='grid' sx={{marginTop: '0', gap:'12px', backgroundColor: { xs: '#dddca8', md: 'transparent'}}} container spacing={1} rowSpacing={1}>
				<Grid item xs={12} sx={{padding: '0', backgroundColor: {xs: '#dddca8', md: 'transparent' }}} className= 'firstGridContainer'>
					<Typography sx={{
						color: {xs: '#c27e7e', md: '#dddca8'},
						fontWeight: 'bold',
						fontSize: {xs: '.9rem', md: '1rem'}
					}} ><Typography variant='p' sx={{ marginRight: {md: '6px'} , color: {md: '#c27e7e'}}} >Proyecto realizado para el</Typography> curso de React de Coderhouse</Typography>
    		</Grid>
    		<Grid item xs={12} sx={{
					backgroundColor: {xs: '#c27e7e', md: 'transparent'},
					paddingBottom: '20px',
					display: 'flex',
					justifyContent: {md: 'space-evenly'},
					flexDirection: {xs: 'column', md: 'row'},
					gap: '10px'
				}} >
					<Typography variant='p' sx={{
						color: {xs: '#dddca8', md: '#c27e7e;'},
						fontWeight: 'bold'
					}}>Creado por Lautaro Chaar</Typography>
					<Box sx={{
						display: 'flex',
						flexDirection: {xs: 'column', sm: 'row'} ,
						justifyContent: {xs: 'space-evenly', sm: 'center'},
						alignItems: 'center',
						gap: '10px'
					}}>
						<a referrerPolicy='noreferrer' rel='noreferrer' href='https://github.com/LautaroChaar' target='_blank' ><GitHubIcon sx={{ cursor: 'pointer', display: 'block', color: '#dddca8', '&:hover': {color: '#fff'}}} /></a>
						<a referrerPolicy='noreferrer' rel='noreferrer' href='https://www.instagram.com/Lautichaar' target='_blank' ><InstagramIcon sx={{ cursor: 'pointer', display: 'block',  color: '#dddca8', '&:hover': {color: '#fff'}}} /></a>
					</Box>
    		</Grid>
    	</Grid>
    	</Box>
	</footer>
  )
}
