import './ItemListContainer.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({ greeting, type, title, image, price, stock, initial, onAdd }) {


  return (
		<section>
			<h1>{greeting}</h1>
			<article className='itemListContainer'>
				<Card>
					<CardContent className='bgItemListContainer'>
						<h2 className='title'>
						{title}
						</h2>
						<h3 className='type'>
						{type}
						</h3>
						<img className='img' src={require(`../../images/${image}.png`)} alt="Pelota-Qatar2022" />
						<p className='price'>
							{price}
						</p>
					</CardContent>
					<CardActions className='cardActionBg'>
					<ItemCount stock= {stock} initial= {initial} onAdd= {onAdd}></ItemCount>
					</CardActions>
				</Card>
			</article>
		</section>
		
  );
}
