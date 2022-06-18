import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

export default function Item({ id, title, type, image, price, stock, initial, onAdd }) {
  return (
    <article className='item'>
				<Card>
					<CardContent className='bgItem'>
						<h2 className='title'>
						{title}
						</h2>
						<h3 className='type'>
						{type}
						</h3>
						<img className='img' src={require(`../../images/${image}`)} alt={`${id} - ${image}`} />
						<p className='price'>
							{price}
						</p>
					</CardContent>
					<CardActions className='cardActionBg'>
					<ItemCount stock= {stock} initial= {initial} onAdd= {onAdd}></ItemCount>
					</CardActions>
				</Card>
			</article>
  )
}
