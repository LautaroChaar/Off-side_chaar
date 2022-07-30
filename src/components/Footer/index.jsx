import React from 'react'
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

export default function Footer() {
  return (
	<footer>
		<Box className='footerContainer'>
    		<Grid className='grid' sx={{marginTop: '0'}} container spacing={1} rowSpacing={1}>
				<Grid item xs={12} sx={{padding: '0'}} className= 'firstGridContainer'>
					<p className='proyectDescription'><span>Proyecto realizado para el</span> curso de React de Coderhouse</p>
    			</Grid>
    			<Grid item xs={12} className= 'secondGridContainer'>
					<p className='creator'>Creado por Lautaro Chaar</p>
					<Box className='redes'>
						<Link to={"/https://github.com/LautaroChaar"} rel="noreferrer" target="_blank"  className='github' ><GitHubIcon sx={{display: 'block'}} /></Link>
						<Link to={"/https://www.instagram.com/lautichaar"} rel="noreferrer" target="_blank"  className='instagram' ><InstagramIcon sx={{display: 'block'}} /></Link>
					</Box>
    			</Grid>
    		</Grid>
    	</Box>
	</footer>
  )
}
