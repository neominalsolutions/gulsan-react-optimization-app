// application buradan boostrapt olur.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<>
		<App />
	</>
);
