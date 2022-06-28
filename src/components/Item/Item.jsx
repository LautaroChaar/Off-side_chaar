import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Item.css';

export default function Item({ id, title, category, image, price, stock, initial, onAdd }) {
  return (
    <article className='item'>
				<Card>
					<CardContent className='bgItem'>
						<p className='id'>{id}</p>
						<h2 className='title'>
						{title}
						</h2>
						<h3 className='category'>
						{category}
						</h3>
						<img className='img' src={require(`../../images/${image}`)} alt={image} />
						<p className='price'>
							{price}
						</p>
					</CardContent>
				</Card>
			</article>
  )
}
