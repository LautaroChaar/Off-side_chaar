import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


export default function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState([]);
	const [loading, setLoading] = useState (true);
	const {id} = useParams();
		

		useEffect(() => {
			
			const db = getFirestore();
			const collectionDetailRef = doc(db, 'products', id);
			getDoc(collectionDetailRef).then((res) => {
				if (res.exists()) {
					setProductDetail({ id: res.id, ...res.data() });
					setLoading(false);
				} 
			})	
		}, [id]);

return (
	
	<div className='itemDetailContainer'>
		{ loading ? <p>...</p> : <ItemDetail productDetail={productDetail} /> }
	</div> 
)
}

