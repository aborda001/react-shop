import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import icon_close from '@icons/icon_close.png';

const ProductDetail = ({product, setToggleProduct, handleClick, isAdded}) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={icon_close} alt="close" onClick={() => setToggleProduct(false)}/>
			</div>
			<ProductInfo
				product={product}
				handleClick={handleClick}
				isAdded={isAdded}
			/>
		</aside>
	);
}

export default ProductDetail;
