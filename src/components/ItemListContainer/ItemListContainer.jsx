import './ItemListContainer.css';
import * as React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

export default function ItemListContainer({ greeting, onAdd }) {

	const [productList, setProductList] = useState([]);

	useEffect (() => {

		let products = [
			{id: 1, title: "Qatar 2022", type: "Pelota", image: "pelotaQatar2022.png", price: "$15.000", stock: 20, initial: 0},
			{id: 2, title: "Rusia 2018", type: "Pelota", image: "pelotaRusia2018.png", price: "$12.000", stock: 14, initial: 0},
			{id: 3, title: "Brasil 2014", type: "Pelota", image: "pelotaBrasil2014.png", price: "$10.000", stock: 9, initial: 0}
		];

		new Promise ((resolve, reject) => {
			setTimeout(()=>{
				resolve(products)
			}, 2000)
		}).then((result)=> {
			setProductList(result);
		})
	}, [])

  return (
		<>
		<h1>{greeting}</h1>
		<section>
			<ItemList productList={productList} onAdd={onAdd} />
		</section>
		</> 	
  );
}
