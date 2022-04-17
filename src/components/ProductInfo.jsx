import React from 'react';
import '@styles/ProductInfo.scss';


const ProductInfo = ({product, handleClick, isAdded}) => {
	return (
		<>
			<img src={product.images[0]} alt={product.name} className="product"/>
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.name}</p>
				<p>{product.description}</p>
				<button
					className="primary-button add-to-cart-button"
					onClick={() => handleClick(product)}
					style={{ cursor: isAdded(product).added ? 'default' : 'pointer' }}
				>
					<img src={isAdded(product).img} alt="add to cart" id="cart-img" />
					{isAdded(product).text}
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
