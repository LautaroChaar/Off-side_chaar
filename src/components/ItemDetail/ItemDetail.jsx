import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './ItemDetail.css';

export default function ItemDetail({ productDetail }) {

	const onAdd = (initial) => {
		alert(`Agregaste ${initial} producto/s al carrito de compra.`)
	};

  return (
    <article className='item'>
				<Card>
					<CardContent className='bgItem'>
						<p className='id'>{productDetail.id}</p>
						<h2 className='title'>{productDetail.title}</h2>
						<h3 className='category'>{productDetail.category}</h3>
						<img className='img' src={require(`../../images/${productDetail.image}`)} alt={productDetail.image} />
						<p className='price'>{productDetail.price}</p>
					</CardContent>
					<CardActions className='cardActionBg'>
					<ItemCount stock= {productDetail.stock} initial= {productDetail.initial} onAdd={onAdd} productDetail={productDetail} ></ItemCount>
					</CardActions>
				</Card>
			</article>
  )
}

