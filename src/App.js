import React from "react";

import Sticker from "./components/Layout/Header/Sticker";
import Header from "./components/Layout/Header/Header";
import Container from "./components/Layout/Container";

function App() {
	return (
		<React.Fragment>
			<header>
				<Sticker></Sticker>
			</header>
			<main>
				<Header></Header>
				<Container></Container>
			</main>
		</React.Fragment>
	);
}

export default App;
