import React from 'react';

import aboutImage from '../src/assets/images/about-us.png';
import jsonData from '../src/assets/json/demo.json';

import './index.scss';
import CssModuleDemo from './components/css-modules/css-module.demo';

function App() {
	return (
		<>
			<h1 className="App">Uygulamanın Ana giriş Noktası</h1>
			<img width={100} height={100} src={aboutImage} />

			<p className="text-lg underline font-bold text-blue-500">Tailwind CSS</p>

			<CssModuleDemo />
		</>
	);
}

export default App;
