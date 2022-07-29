import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import './ItemCarousel.css';
import { Link } from 'react-router-dom';

export default function ItemCarousel({ id, title, category, image, price, stock }) {

  return (
    <article className='itemCarousel'>
		<Card className='cardItemCarousel'>
			<CardContent className='bgItemCarousel' >
				<div className='itemCarouselImgContainer'>
					<img className='imgItemCarousel' src={image} alt={image} />
				</div>
				<div className='infoItemCarousel'>
					<h2 className='titleItemCarousel'>{title}</h2>
					<h3 className='categoryItemCarousel'>Categoria : {category}</h3>
					<p className='stockItemCarousel'>Stock : {stock} </p>
					<p className='priceItemCarousel'>Precio : <span>${price}</span></p>
				</div>
				<Button variant="contained" sx={{ backgroundColor: "#2e2e2e", marginTop: '14px', boxShadow: 'none', '&:hover': { backgroundColor: 'transparent', boxShadow: 'none'} }}  className='btnItemCarousel' >
					<Link className='itemCarouselLink' to={`/product/${id}`}>VER DETALLE</Link>
				</Button>
			</CardContent>
		</Card>
	</article>
  )
}
