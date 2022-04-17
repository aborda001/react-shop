import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';

import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleMobile, setToggleMobile] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext(AppContext);
	const cart = state.cart;

	const handleToogle = () => {
		setToggle(!toggle);
	}

	const handleToogleMobile = () => {
		setToggleMobile(!toggleMobile);
	}

	return (
		<nav>
			<img src={icon_menu} alt="menu" className="menu" onClick={handleToogleMobile} />
			<div className="navbar-left">
				<img src={logo_yard_sale} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToogle}>
						platzi@example.com
					</li>

					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={icon_shopping_cart} alt="shopping cart" />
						{cart.length > 0 && <div>{cart.length}</div>}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleMobile && <MobileMenu />}
			{toggleOrders && <MyOrder />}	
		</nav>
	);
}

export default Header;
