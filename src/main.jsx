import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Error from './pages/error/Error.jsx'
import ADD_BOOK from './pages/add-book/ADD_BOOK.jsx'
import EDIT_BOOK from './pages/edit-book/EDIT_BOOK.jsx'
import VIEW_BOOK from './pages/view-book/VIEW_BOOK.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/addbook",
				element: <ADD_BOOK />,
			},
			{
				path: "/editbook",
				element: <EDIT_BOOK />,
			},
			{
				path: "/viewbook",
				element: <VIEW_BOOK />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={route}>
			<App />
		</RouterProvider>
	</Provider>
);
