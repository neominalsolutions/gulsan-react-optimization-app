import React from 'react';

import aboutImage from '../src/assets/images/about-us.png';
import jsonData from '../src/assets/json/demo.json';

import './index.scss';
import CssModuleDemo from './components/css-modules/css-module.demo';
import { Link, Outlet } from 'react-router-dom';

// https://primereact.org/tailwind/#csslayer

function App() {
	return (
		<>
			{/* <h1 className="App">Uygulamanın Ana giriş Noktası</h1>
			<img width={100} height={100} src={aboutImage} />
			<p className="text-lg underline font-bold text-blue-500">Tailwind CSS</p>
			<CssModuleDemo /> */}

			<header className="h-6">
				<nav>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/react-memo">
						React Memo
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/usememo">
						Use Memo
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/usecallback">
						Use Callback
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/prime-demo">
						Prime Demo
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/useref">
						UseRef Demo
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/imperative">
						Imperative Demo
					</Link>
					<Link
						className="underline text-blue-500 mb-2 mx-2"
						to="/imperativev2"
					>
						Imperative Demo V2
					</Link>
					<Link className="underline text-blue-500 mb-2 mx-2" to="/custom-hook">
						Custom Hook
					</Link>
					<Link
						className="underline text-blue-500 mb-2 mx-2"
						to="/usefetch-demo"
					>
						UseFetch Demo
					</Link>

					<Link className="underline text-blue-500 mb-2 mx-2" to="/swr-demo">
						USE SWR Demo
					</Link>

					<Link className="underline text-blue-500 mb-2 mx-2" to="/debouncing">
						ServerSide Searching
					</Link>

					<Link
						className="underline text-blue-500 mb-2 mx-2"
						to="/virtualizedlist"
					>
						Virtualized List
					</Link>

					<Link
						className="underline text-blue-500 mb-2 mx-2"
						to="/redux-thunk"
					>
						Redux Thunk
					</Link>
				</nav>
			</header>
			<main className="p-5">
				<Outlet />
			</main>
		</>
	);
}

export default App;
