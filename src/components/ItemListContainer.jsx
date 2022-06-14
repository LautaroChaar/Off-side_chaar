import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({ type, title, image, price }) {
  return (
    <article className='ItemListContainer'>
			<h2>{title}</h2>
			<h3>{type}</h3>
			<img src={require(`../images/${image}.png`)} alt="Pelota-Qatar2022" />
			<p>{price}</p>
		</article>
  );
}
