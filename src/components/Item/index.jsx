import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, title, category, image, price, stock }) {

  return (
    <article className='item'>
			<Card className='cardItem'>
				<CardContent className='bgItem'>
					<div className='itemImgContainer'>
						<img className='img' src={image} alt={image} />
					</div>
					<div className='infoItem'>
						<h2 className='title'>{title}</h2>
						<h3 className='category'>Categoria : {category}</h3>
						<p className='stock'>Stock : {stock}</p>
						<p className='price'>Precio : <span>${price}</span></p>
					</div>
					<Button variant="contained" sx={{ backgroundColor: "#2e2e2e", marginTop: '14px', boxShadow: 'none', width: '100%', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none'} }} >
						<Link className='itemLink' to={`/product/${id}`}>VER DETALLE</Link>
					</Button>
				</CardContent>
			</Card>
		</article>
  )
}
