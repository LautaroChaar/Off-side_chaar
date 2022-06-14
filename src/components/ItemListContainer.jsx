import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting, type, title, image, price }) {
  return (
	<section>
		<h1>{greeting}</h1>
		<article className='ItemListContainer'>
			<h2>{title}</h2>
			<h3>{type}</h3>
			<img src={require(`../images/${image}.png`)} alt="Pelota-Qatar2022" />
			<p>{price}</p>
		</article>
	</section>
    
  );
}
