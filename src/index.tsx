// application buradan boostrapt olur.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactMemoDemo from './components/react-memo/react.memo.demo';
import UseMemoDemo from './components/use-memo/usememo.demo';
import UseCallBackDemo from './components/usecallback/usecallback.demo';

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
			{
				path: 'usememo',
				Component: UseMemoDemo,
			},
			{
				path: 'usecallback',
				Component: UseCallBackDemo,
			},
		],
	},
]);

root.render(
	<>
		<RouterProvider router={router} />
	</>
);
