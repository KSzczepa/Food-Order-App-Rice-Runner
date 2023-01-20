import React, {useState, useContext} from "react";

import Sticker from "./components/Layout/Header/Sticker";
import Header from "./components/Layout/Header/Header";
import Container from "./components/Layout/Container/Container";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthContext from "./store/AuthContext/auth-context";
import Card from "./components/UI/Card";
import LogginForm from "./components/LogginForm/LogginMainForm";

function App() {

	const ctx = useContext(AuthContext);

	const [cartButtonVisible, setCartButtonVisible] = useState(false);
	const [userLogginFormVisible, setUserLogginFormVisible] = useState(false);

	const showCartHandler = () => {
		setCartButtonVisible(true);
	};

	const hideCartHandler = () => {
		setCartButtonVisible(false);
	};

	console.log('loggedIn', ctx.isLoggedIn);
	console.log('formActive', ctx.loginFormActive);

	const showUserFormHandler = () => {
		console.log('LogginFormActive?');
        ctx.loginFormActive = true;
		setUserLogginFormVisible(true);
		// ctx.onSetLoggingForm();
	};

	const hideUserFormHandler = () => {
		// ctx.onCloseLogForm();
		ctx.loginFormActive = false;
		setUserLogginFormVisible(false);
	};

	return (
		<CartProvider>
			{ctx.loginFormActive &&<LogginForm onClickLogForm={hideUserFormHandler}/>}
			{cartButtonVisible && <Cart onCloseCart={hideCartHandler}/>}
			<Sticker onShowCart={showCartHandler} onShowUserForm={showUserFormHandler}></Sticker>
			<main>				
				<Header></Header>
				<Container></Container>
			</main>
		</CartProvider>
	);
}

export default App;
