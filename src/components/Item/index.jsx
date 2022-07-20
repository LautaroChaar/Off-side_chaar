import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, title, category, image, price}) {


  return (
    <article className='item'>
			<Card className='cardItem'>
				<CardContent className='bgItem'>
					<h2 className='category'>{category}</h2>
					<h3 className='title'>{title}</h3>
					<div>
						<img className='img' src={image} alt={image} />
					</div>
					<p className='price'>${price}</p>
					<Button variant="contained" sx={{ backgroundColor: "#2e2e2e", marginTop: '14px' }} className='buttonDetail'>
						<Link className='itemLink' to={`/product/${id}`}>VER DETALLE</Link>
					</Button>
				</CardContent>
			</Card>
		</article>
  )
}
