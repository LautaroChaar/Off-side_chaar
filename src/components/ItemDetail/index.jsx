import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { Typography, Box } from '@mui/material';
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ productDetail }) {

	const onAdd = (initial) => {
		Swal.fire({
			icon:'success',
			title: 'Listo',
			text: `Agregaste ${initial} producto/s al carrito de compra.`,
			background: '#111111',
			color: '#b7b7b7',
			confirmButtonColor: '#4e4e4e',
			confirmButtonText: 'Cerrar'
		})
	};

  return (
	<Box component='article' sx={{ padding: '24px' }} >
		<Card>
			<CardContent 
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				backgroundColor: '#282828',
				border: '4px solid #FFF',
				boxShadow: 'rgb(0 0 0) 0px 3px 8px',
				maxWidth: '715px'
			}} >
				<Box 
				sx={{ 
					display: 'flex',
    				flexDirection:{ xs: 'column', sm: 'row' },
					justifyContent: { sm: 'space-evenly' },
					alignItems: { sm: 'center' },
    				height: '100%',
    				width: '100%'
				}}
				 >
					<Box>
						<img className='itemDetaiImg' src={productDetail.image} alt={productDetail.image}/>
					</Box>
					<Box className='infoContainer'>
						<Typography variant='h2' sx={{ color: '#FFF2E6', fontWeight: 'bold', fontSize: '1.2rem', margin: '4px' }} className='itemDetailTitle'>{productDetail.title}</Typography>
						<Typography variant='h3' sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '1.2rem', margin: '4px' }} className='itemDetailCategory'>{productDetail.category}</Typography>
						<Typography variant='h4' sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '1.2rem', margin: '4px' }} className='itemDetailStock'>Stock : {productDetail.stock}</Typography>
						<Typography variant='h5' sx={{ color: '#b7b7b7', fontWeight: 'bold', fontSize: '1.4rem', margin: '4px' }} className='itemDetailPrice'>${productDetail.price}</Typography>
						<CardActions sx={{ justifyContent: 'center', backgroundColor: '#282828' }} >
							<ItemCount stock= {productDetail.stock} initial= {productDetail.initial} onAdd={onAdd} productDetail={productDetail} ></ItemCount>
						</CardActions>
					</Box>
				</Box>
				<Box>
					<Typography variant='h6' sx={{ color: '#FFF2E6', fontSize: '1.2rem', margin: '10px' }}>Descripcion</Typography>
					<Typography sx={{ color: '#b7b7b7', fontSize: '1rem' }}>{productDetail.description}</Typography>
				</Box>
			</CardContent>
		</Card>
	</Box>
  )
}

