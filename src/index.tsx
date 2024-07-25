// application buradan boostrapt olur.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactMemoDemo from './components/react-memo/react.memo.demo';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '',
		Component: App,
		children: [
			{
				path: 'react-memo',
				Component: ReactMemoDemo,
			},
		],
	},
]);

root.render(
	<>
		<RouterProvider router={router} />
	</>
);
