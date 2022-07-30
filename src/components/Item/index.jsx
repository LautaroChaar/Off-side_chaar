import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import { Typography, Box } from '@mui/material';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, title, category, image, price, stock }) {

  return (
    <Box 
	component='article' 
	sx={{
		border: '4px solid #FFF',
    	height: '320px',
    	width: '200px',
    	boxShadow: 'rgb(0 0 0) 0px 3px 8px'
		}}>
		<Card sx={{ height: '100%'}}>
			<CardContent sx={{ backgroundColor: '#282828', height: '88%' }}>
				<Box>
					<img className='img' src={image} alt={image} />
				</Box>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}>
					<Typography 
					variant='h2' 
					sx={{ 
						color: '#FFF2E6',
    					fontSize: '1rem',
						fontWeight: 'bold',
   						margin: '0',
    					textTransform: 'uppercase'
						}} 
						>{title}</Typography>
					<Typography variant='h3' sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '.9rem', margin: '2px' }} >Categoria : {category}</Typography>
					<Typography sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '.9rem', margin: '2px' }} >Stock : {stock}</Typography>
					<Typography sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '.9rem', margin: '2px' }} >Precio : <Typography variant='p' sx={{ fontSize: '1.2rem' }}>${price}</Typography></Typography>
				</Box>
				<Button variant="contained" sx={{ backgroundColor: "#2e2e2e", marginTop: '14px', boxShadow: 'none', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none'} }} >
					<Link className='itemLink' to={`/product/${id}`}>VER DETALLE</Link>
				</Button>
			</CardContent>
		</Card>
	</Box>
  )
}
