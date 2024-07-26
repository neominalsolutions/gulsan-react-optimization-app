import React, {
	ForwardedRef,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react';

// state useimperative.demo dan müdahale ettiğimiz component
// sayaç component

// counterLabel.start();
// counterLabel.stop();


type Props = {
	counter:number;
};

function CounterLabelV2({ counter }: Props) {
	console.log('...child rendering');

	return <>Sayac: {counter}</>;
}

export default CounterLabelV2;
