import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({ productList, onAdd }) {
  return (
    <div className='itemListContainer'>
			{
			productList.map((item) => (
					<Item key={item.id} id={item.id} title={item.title} type={item.type} image={item.image} price={item.price} stock={item.stock} initial={item.initial} onAdd={onAdd} />
				))
			}
    </div>
  )
}