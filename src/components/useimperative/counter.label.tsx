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

export type CounterLabelHandle = {
	start: () => void;
	stop: () => void;
};

type Props = {};

function CounterLabel(
	{}: Props,
	ForwadedRef: ForwardedRef<CounterLabelHandle>
) {
	const [counter, setCounter] = useState<number>(0);

	console.log('...child rendering');

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

	useImperativeHandle(ForwadedRef, () => ({
		start() {
			setCounter(counter + 1);
		},
		stop() {
			setCounter(0);
			clearInterval(timer);
		},
	}));

	return <>Sayac: {counter}</>;
}

export default forwardRef(CounterLabel);
