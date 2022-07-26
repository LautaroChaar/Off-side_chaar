import React from 'react'
import { Container, Grid, Box } from '@mui/material';
import './Footer.css';

export default function Footer() {
  return (
	<footer>
		<Box className='footerContainer'>
      <Container maxWidth='lg'>
      	<Grid className='grid' container spacing={1} rowSpacing={1}>
					<Grid item xs={12}>
						<Box>
							<p>Proyecto realizado para el curso de React de Coderhouse</p>
						</Box>
      		</Grid>
					<Grid item xs={12} sm={6}>
						<Box>
							<p>Creado por Lautaro Chaar</p>
						</Box>
      		</Grid>
      		<Grid item xs={12} sm={6}>
						<Box>
							<p>Redes</p>
							<Box className='redes'>
      		      <p>Facebook</p>
      		      <p>Github</p>
      		      <p>Instagram</p>
							</Box>
						</Box>
      		</Grid>
      	</Grid>
      </Container>
    </Box>
	</footer>
  )
}
