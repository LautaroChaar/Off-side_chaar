import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import { Typography, Box } from '@mui/material';
import './ItemCarousel.css';
import { Link } from 'react-router-dom';

export default function ItemCarousel({ id, title, category, image, price, stock }) {

  return (
    <Box component='article' sx={{ border: '4px solid #FFF', boxShadow: 'rgb(0 0 0) 0px 3px 8px' }} className='itemCarousel' >
			<Card sx={{ height: '100%'}}>
				<CardContent sx={{
				backgroundColor: '#282828',
				display: 'flex',
				justifyContent: 'space-evenly'
				}} className= 'bgItemCarousel'>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<img className='imgItemCarousel' src={image} alt={image} />
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
    				textTransform: 'uppercase' }}
						>{title}</Typography>
						<Typography 
						variant='h3' 
						sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem' },
    				fontWeight: 'bold',
    				margin: '2px'
						}}
						className='categoryItemCarousel' >Categoria : {category}</Typography>
						<Typography sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem'},
    				fontWeight: 'bold',
    				margin: '2px'
						}} 
						className='stockItemCarousel' >Stock : {stock} </Typography>
						<Typography sx={{
						color: '#b7b7b7',
    				fontSize: {xs: '.9rem', lg: '1.2rem' },
    				fontWeight: 'bold',
    				margin: '2px'
						}} 
						className= 'priceItemCarousel' >Precio : <Typography variant='p' sx={{ fontSize: { xs: '1rem'} }} className='priceItemCarouselSpan' >${price}</Typography></Typography>
					</Box>
					<Button variant="contained" sx={{ backgroundColor: "#2e2e2e", marginTop: '14px', boxShadow: 'none', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none'} }}  className='btnItemCarousel' >
						<Link className='itemCarouselLink' to={`/product/${id}`}>VER DETALLE</Link>
					</Button>
				</CardContent>
			</Card>
		</Box>
  )
}
