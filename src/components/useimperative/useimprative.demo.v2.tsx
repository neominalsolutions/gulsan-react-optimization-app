import React, { useEffect, useRef, useState } from 'react';
import CounterLabel, { CounterLabelHandle } from './counter.label';
import { Button } from 'primereact/button';
import CounterLabelV2 from './counter.label.props';

function UseImperativeDemoV2() {
	console.log('...parent rendering');

	const [counter, setCounter] = useState<number>(0);
	let timer: any;
	
	useEffect(() => {
		// clean up function

		if (counter > 0) {
			timer = setInterval(() => {
				setCounter(counter + 1);
			}, 1000);

			console.log(timer);

			// birden falza timer intance oluştuğu için clearInterval yapmadığımız aslında birden fazla timer instance göre state değişiyor.
			// clean up functions
			return () => {
				console.log('temizlik kısmı');
				clearInterval(timer);
			};
		}
	}, [counter]);

	return (
		<>
			<CounterLabelV2 counter={counter} />

			<hr></hr>
			<Button
				className="mx-2"
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Start
			</Button>

			<Button
				className="mx-2"
				onClick={() => {
					setCounter(0);
					clearInterval(timer);
				}}
			>
				Stop
			</Button>
		</>
	);
}

export default UseImperativeDemoV2;
