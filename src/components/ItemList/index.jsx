import React from 'react';
import Item from '../Item';
import './ItemList.css';

export default function ItemList({ productList }) {

  return (
    <div className='itemList'>
			{
				productList.map((item) => (
					<Item key={item.id} id={item.id} title={item.title} category={item.category} image={item.image} price={item.price} stock={item.stock} initial={item.initial} />
				))
			}
    </div>
  )
}