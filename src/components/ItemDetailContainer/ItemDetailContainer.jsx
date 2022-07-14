import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


export default function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState (true);
	const {id} = useParams();
		

		useEffect(() => {
			
			const db = getFirestore();
			const collectionDetailRef = collection(db, 'products');
			getDocs(collectionDetailRef).then((res) => {
				const collectionDetail = res.docs.map( item => ({ ...item.data(), id: item.id }));
				setProductDetail(collectionDetail.find((item) => item.id ===  id));
				
				setLoading(false);
			})	
		}, [id]);

return (
	
	<div className='itemDetailContainer'>
		{ loading ? <p>...</p> : <ItemDetail productDetail={productDetail} /> }
	</div> 
)
}

