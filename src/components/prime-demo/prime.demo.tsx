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
			<Menu model={items} />
			<Button onClick={click} label="Submit" />
		</>
	);
}

export default PrimeDemo;
