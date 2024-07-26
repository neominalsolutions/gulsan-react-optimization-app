// application buradan boostrapt olur.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactMemoDemo from './components/react-memo/react.memo.demo';
import UseMemoDemo from './components/use-memo/usememo.demo';
import UseCallBackDemo from './components/usecallback/usecallback.demo';
import { PrimeReactProvider } from 'primereact/api';
import PrimeDemo from './components/prime-demo/prime.demo';
import Tailwind from 'primereact/passthrough/tailwind';
import UseRefDemo from './components/useref/useref.demo';
import UseImperativeDemo from './components/useimperative/useimprative.demo';
import UseImperativeDemoV2 from './components/useimperative/useimprative.demo.v2';
import CustomHookDemo from './components/customhook/custom.hook.demo';
import UseFetchHookDemo from './components/customhook/useFetch.hook.demo';
import SwrDemo from './components/swr/swr.demo';

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
			{
				path: 'prime-demo',
				Component: PrimeDemo,
			},
			{
				path: 'useref',
				Component: UseRefDemo,
			},
			{
				path: 'imperative',
				Component: UseImperativeDemo,
			},
			{
				path: 'imperativev2',
				Component: UseImperativeDemoV2,
			},
			{
				path: 'custom-hook',
				Component: CustomHookDemo,
			},
			{
				path: 'usefetch-demo',
				Component: UseFetchHookDemo,
			},
			{
				path: 'swr-demo',
				Component: SwrDemo,
			},
		],
	},
]);

root.render(
	<>
		<PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
			<RouterProvider router={router} />
		</PrimeReactProvider>
	</>
);
