import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


export default function ItemDetailContainer(onAdd) {

    const [productDetail, setProductDetail] = useState([]);
		const [loading, setLoading] = useState (true);
		const {id} = useParams();
		

		useEffect(() => {
			
			let products = [
				{id: 1, title: "Qatar 2022", category: "pelotas", image: "pelotaQatar2022.png", price: "$15.000", stock: 20, initial: 0},
				{id: 2, title: "Rusia 2018", category: "pelotas", image: "pelotaRusia2018.png", price: "$12.000", stock: 14, initial: 0},
				{id: 3, title: "Brasil 2014", category: "pelotas", image: "pelotaBrasil2014.png", price: "$10.000", stock: 9, initial: 0},
				{id: 4, title: "PSG", category: "camisetas", image: "camisetaPsg.png", price: "$25.000", stock: 16, initial: 0},
				{id: 5, title: "Argentina", category: "camisetas", image: "camisetaSeleccionArgentina.png", price: "$25.000", stock: 12, initial: 0},
				{id: 6, title: "Predator", category: "botines", image: "adidasPredatorEdge.webp", price: "$19.000", stock: 14, initial: 0},
				{id: 7, title: "Phantom Gt", category: "botines", image: "nikePhantomGt.png", price: "$13.499", stock: 10, initial: 0}
			];

			new Promise((resolve, reject) => {
				setTimeout(() => {
						resolve(products)
				}, 2000)
				}).then(result => {
				setProductDetail(result.find((product) => product.id ===  Number(id)));
				setLoading(false);
				})
		}, [id])


return (
	
	<div>
		{ loading ? <p>...</p> : <ItemDetail productDetail={productDetail} onAdd={onAdd} /> }
	</div> 
)
}

