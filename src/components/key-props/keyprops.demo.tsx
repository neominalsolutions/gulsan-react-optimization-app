import React, { Children } from 'react';
import MemoChild from '../react-memo/memo.child';

function KeyPropsDemo() {
	const numbers = [1, 2, 3, 4, 5];

	// templating yöntemi
	// key props dikkat edip bu yöntem ile arayüzleri yazmaya özel gçösterelim performs için önemli
	const listItems = numbers.map((number: number, index: number) => (
		<>
			<li key={index}>{number}</li>
			<MemoChild key={`item_${index}`} />
		</>
	));

	return <>{listItems}</>;
}

export default KeyPropsDemo;
