import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {PContext} from "../Contexts/ProductContext"

const Navigation = props => {
	const {cart} = useContext(PContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
