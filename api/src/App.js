import React from "react";

import RootLayout from "./pages/RootLayout";
import Cart from "./components/Cart/Cart";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: '/cart', 
				element: <Cart />
			},
			{
				path: '/order-form',
				element: <Cart />
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
