import './ItemListContainer.css';
import * as React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {

	const [productList, setProductList] = useState([]);
	const { category } = useParams();
	const [loading, setLoading] = useState (true);
	
	useEffect (() => {

		let products = [
			{id: 1, title: "Qatar 2022", category: "pelotas", image: "pelotaQatar2022.png", price: 15000, stock: 20, initial: 0},
			{id: 2, title: "Rusia 2018", category: "pelotas", image: "pelotaRusia2018.png", price: 12000, stock: 14, initial: 0},
			{id: 3, title: "Brasil 2014", category: "pelotas", image: "pelotaBrasil2014.png", price: 10000, stock: 9, initial: 0},
			{id: 4, title: "PSG", category: "camisetas", image: "camisetaPsg.png", price: 25000, stock: 16, initial: 0},
			{id: 5, title: "Argentina", category: "camisetas", image: "camisetaSeleccionArgentina.png", price: 25000, stock: 12, initial: 0},
			{id: 6, title: "Predator", category: "botines", image: "adidasPredatorEdge.png", price: 19000, stock: 14, initial: 0},
			{id: 7, title: "Phantom Gt", category: "botines", image: "nikePhantomGt.png", price: 13499, stock: 10, initial: 0}
		];

		let productsFilter = products.filter( item => item.category === (category)); 

		new Promise ((resolve, reject) => {
			setTimeout(()=>{
				category ? resolve(productsFilter) : resolve(products)
			}, 2000)})
			.then((result)=> {	
			setProductList(result);
			setLoading(false);})
	}, [category])

  return (
		<div>
			{ loading 
				? <p>...</p> 
				: 
				<> 
				<h1>{greeting}</h1>
				<section className='itemListContainer'>
					<ItemList productList={productList} />
				</section>
				</>
			}
		</div>
  );
}