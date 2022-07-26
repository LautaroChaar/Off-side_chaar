import './ItemListContainer.css';
import * as React from 'react';
import ItemList from '../ItemList';
import Carousel from '../Carousel';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {

	const [productList, setProductList] = useState([]);
	const [bestSellers, setBestSellers] = useState([]);
	const { category } = useParams();
	const [loading, setLoading] = useState (true);
	
	useEffect (() => {
		const db = getFirestore();
		let collectionRef;
		let productsBestSellersref = collection(db, 'bestsellers');

		!category 
		?
		collectionRef = collection(db, 'products')
		:
		collectionRef = query(collection(db, 'products'), where ('category', '==', category));

		getDocs(collectionRef).then((res) => {
			const collection = res.docs.map( (item) => ({...item.data(), id: item.id }) );
			setProductList(collection);
			setLoading(false) })
		getDocs(productsBestSellersref).then((res) => {
			const productsBestSellers = res.docs.map( (item) => ({...item.data(), id: item.id }) );
			setBestSellers(productsBestSellers);
			})		
	}, [category]);

  return (
		<div>
			{ loading 
				? 
				<p>...</p> 
				: 
				<div className='boxListContainer'> 
					<h1>{greeting}</h1>
					<div className='productsContainer' >
							<section className='bestSellerContainer'>
								<Carousel productList={bestSellers} />
							</section>
							<section className='itemListContainer'>
								<ItemList productList={productList} />
							</section>
					</div>
					
				</div>
			}
		</div>
  );
}

{/* <div>
{ loading 
	? 
	<p>...</p> 
	: 
	<Box className='boxListContainer'>
		<Container maxWidth='lg'>
			<Grid className='grid' container spacing={1} rowSpacing={1}>
				<Grid item xs={12} sm={6}>
					<section className='bestSellersContainer'>
						<h1>{greeting}</h1>
						<Carousel productList={bestSellers} />
					</section>
				</Grid>
				<Grid item xs={12} sm={12}>
					<section className='itemListContainer'>
						<ItemList productList={productList} />
					</section>
				</Grid>
			</Grid>
		</Container> 
	</Box>
}
</div> */}