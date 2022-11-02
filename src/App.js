import React, {useState} from "react";

import Sticker from "./components/Layout/Header/Sticker";
import Header from "./components/Layout/Header/Header";
import Container from "./components/Layout/Container/Container";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

	const [cartButtonVisible, setCartButtonVisible] = useState(false);

	const showCartHandler = () => {
		setCartButtonVisible(true);
	};

	const hideCartHandler = () => {
		setCartButtonVisible(false);
	};

	return (
		<CartProvider>
			{cartButtonVisible && <Cart onCloseCart={hideCartHandler}/>}
			<Sticker onShowCart={showCartHandler}></Sticker>
			<main>				
				<Header></Header>
				<Container></Container>
			</main>
		</CartProvider>
	);
}

export default App;
