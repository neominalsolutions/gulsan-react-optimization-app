import React, { useRef } from 'react';
import CounterLabel, { CounterLabelHandle } from './counter.label';
import { Button } from 'primereact/button';

function UseImperativeDemo() {
	const counterRef = useRef<CounterLabelHandle>(null);
	const counterRef2 = useRef<CounterLabelHandle>(null);
	console.log('...parent rendering');

	return (
		<>
			<CounterLabel ref={counterRef} />
			{/* <CounterLabel ref={counterRef2} /> */}
			<hr></hr>
			<Button
				className="mx-2"
				onClick={() => {
					counterRef.current?.start();
				}}
			>
				Start
			</Button>
			{/* <Button
				className="mx-2"
				onClick={() => {
					counterRef2.current?.start();
				}}
			>
				Start 2
			</Button> */}
			<Button
				className="mx-2"
				onClick={() => {
					counterRef.current?.stop();
				}}
			>
				Stop
			</Button>
		</>
	);
}

export default UseImperativeDemo;
