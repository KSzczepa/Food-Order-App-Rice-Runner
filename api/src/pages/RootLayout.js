import React, {useState} from "react";

import Sticker from "../components/Layout/Header/Sticker";
import Header from "../components/Layout/Header/Header";
import Container from "../components/Layout/Container/Container";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import LogginForm from "../components/LogginForm/LogginMainForm";
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from '../store/AuthContext/auth';
import { useNavigate } from "react-router-dom";

const RootLayout = () => {

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const isAuth = useSelector(state => state.auth.isAuthenticated);
	const isLogFormActive = useSelector(state => state.auth.isLoginFormActive);

	const [cartModuleVisible, setcartModuleVisible] = useState(false);

	const navigateHandler = (path) => {
        navigate(path);
    };

	const showCartHandler = () => {
		setcartModuleVisible(true);
		navigateHandler('/cart');
	};

	const hideCartHandler = () => {
		setcartModuleVisible(false);
		navigateHandler('/');
	};

	const showUserFormHandler = () => {
		dispatch(authActions.showLoginForm());
	};

	const hideUserFormHandler = () => {
		dispatch(authActions.hideLoginForm());
	};

	return (
		<CartProvider>
			{isLogFormActive &&<LogginForm onClickLogForm={hideUserFormHandler}/>}
			{cartModuleVisible && <Cart onCloseCart={hideCartHandler}/>}
			<Sticker onShowCart={showCartHandler} onShowUserForm={showUserFormHandler}></Sticker>
			<main>				
				<Header></Header>
				<Container></Container>
			</main>
		</CartProvider>
	);
}

export default RootLayout;
