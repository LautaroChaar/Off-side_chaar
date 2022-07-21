import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import ItemCount from '../ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ productDetail }) {

	const onAdd = (initial) => {
		alert(`Agregaste ${initial} producto/s al carrito de compra.`)
	};

  return (
    <article className='itemDetail'>
		<Card className='itemDetailCard'>
			<CardContent className='itemDetailContent'>
				<div>
					<img className='itemDetaiImg' src={productDetail.image} alt={productDetail.image}/>
				</div>
				<div className='infoContainer'>
					<h2 className='itemDetailCategory'>{productDetail.category}</h2>
					<h3 className='itemDetailTitle'>{productDetail.title}</h3>
					<p className='itemDetailDescription'>{productDetail.description}</p>
					<h4 className='itemDetailPrice'>${productDetail.price}</h4>
					<CardActions className='itemDetailCardAction'>
						<ItemCount stock= {productDetail.stock} initial= {productDetail.initial} onAdd={onAdd} productDetail={productDetail} ></ItemCount>
					</CardActions>
				</div>
			</CardContent>
		</Card>
	</article>
  )
}

