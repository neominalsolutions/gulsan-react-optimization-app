import React, { useCallback } from 'react';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { Menu } from 'primereact/menu';

function PrimeDemo() {
	const click = useCallback(() => {
		alert('click');
	}, []);

	const items = [
		{
			label: 'File',
			items: [
				{ label: 'New', icon: PrimeIcons.PLUS },
				{ label: 'Open', icon: PrimeIcons.DOWNLOAD },
			],
		},
	];

	return (
		<>
			<div className="text-center">
				<p>Ortalı Yazı</p>
				<Menu className="mb-2" model={items} />
				<Button className="text-lg" onClick={click} label="Submit" />
			</div>
		</>
	);
}

export default PrimeDemo;
