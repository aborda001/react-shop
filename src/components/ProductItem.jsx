import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import ProductDetail from '@containers/ProductDetail';

import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import bt_added_to_cart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const {state, addToCart} = useContext(AppContext);
	const [toggleProduct, setToggleProduct] = useState(false);

	const handleClick = ( item ) => {
		if (state.cart.includes(item)) return;
		addToCart(item);
	}

	const isAdded = ( item ) => {
		if (state.cart.includes(item)) return {
			img: bt_added_to_cart,
			text: 'Added to cart',
			added: true
		};
		return {
			img: bt_add_to_cart,
			text: 'Add to cart',
			added: false
		};
	}

	const handleToggleProduct = () => {
		setToggleProduct(!toggleProduct);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} onClick={handleToggleProduct} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} style={{ cursor: isAdded(product).added ? 'default' : 'pointer' }}>
					<img src={isAdded(product).img} alt={isAdded(product).text} />
				</figure>
				{toggleProduct && <ProductDetail product={product} setToggleProduct={setToggleProduct} handleClick={handleClick} isAdded={isAdded} />}
			</div>
		</div>
	);
}

export default ProductItem;
