import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
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
	<article className='itemDetail'>
		<Card className='itemDetailCard'>
			<CardContent className='itemDetailContent'>
				<div className='ItemDetailInfoContainer'>
					<div className='itemDetaiImgContainer'>
						<img className='itemDetaiImg' src={productDetail.image} alt={productDetail.image}/>
					</div>
					<div className='infoContainer'>
						<h2 className='itemDetailTitle'>{productDetail.title}</h2>
						<h3 className='itemDetailCategory'>{productDetail.category}</h3>
						<h4 className='itemDetailStock'>Stock : {productDetail.stock}</h4>
						<h5 className='itemDetailPrice'>${productDetail.price}</h5>
						<CardActions className='itemDetailCardAction'>
							<ItemCount stock= {productDetail.stock} initial= {productDetail.initial} onAdd={onAdd} productDetail={productDetail} ></ItemCount>
						</CardActions>
					</div>
				</div>
				<div>
					<h5 className='itemDetailDescriptionTitle'>Descripcion</h5>
					<p className='itemDetailDescription'>{productDetail.description}</p>
				</div>
			</CardContent>
		</Card>
	</article>
  )
}

