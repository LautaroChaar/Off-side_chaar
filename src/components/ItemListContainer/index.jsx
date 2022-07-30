import './ItemListContainer.css';
import * as React from 'react';
import ItemList from '../ItemList';
import Carousel from '../Carousel';
import Loading from '../Loading';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

	const [productList, setProductList] = useState([]);
	const { category } = useParams();
	const [loading, setLoading] = useState (true);
	
	useEffect (() => {
		const db = getFirestore();
		let collectionRef;

		!category 
		?
		collectionRef = collection(db, 'products')
		:
		collectionRef = query(collection(db, 'products'), where ('category', '==', category));

		getDocs(collectionRef).then((res) => {
			const collection = res.docs.map( (item) => ({...item.data(), id: item.id }) );
			setProductList(collection);
			setLoading(false);
		})	
	}, [category]);

  return (
		<Box>
			{ loading 
				? 
				<Loading />
				:  
				<Box 
				sx={{
					padding: '20px',
    				display: 'flex',
    				justifyContent: 'center',
    				alignItems: 'center',
    				gap: '30px'
				}} className='listContainer' >
					<Box component='section' >
						<Carousel productList={productList} />
					</Box>
					<Box component='section' >
						<ItemList productList={productList} />
					</Box>
				</Box>
			}
		</Box>
  );
}

