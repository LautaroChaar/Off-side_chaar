import React from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css';


export default function ItemDetailContainer() {

  const [productDetail, setProductDetail] = React.useState([]);
	const [loading, setLoading] = React.useState (true);
	const {id} = useParams();
		
	React.useEffect(() => {
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

