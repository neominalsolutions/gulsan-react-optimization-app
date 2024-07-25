import React, { useState } from 'react';
import MemoChild from './memo.child';

// reactMemo ile bir component atındaki child componentlerin parent compoennt içinde state değişimi olduğpunda yeniden arayüzler re-render yapmamıs için kullanılan bir optimizayon tekniği
// React da biz bu şekilde memo ile sarılmış componentlere Pure Component ismini veriyoruz.

function ReactMemoDemo() {
	console.log('...parent rendering');
	const [random, setRandom] = useState<number>(0);
	const [title, setTitle] = useState<string>('');

	// <button onClick={() => setRandom(Math.random())} inline-function bu tarz yazımlardan kaçınalım render performasını olumsuz etkiliyor

	const onRandom = () => {
		setRandom(Math.random() * 100);
	};

	const onTitleChange = () => {
		setTitle(`Title ${random.toString()}`);
	};

	return (
		<>
			<MemoChild title={title} />

			<hr></hr>
			{/* <button onClick={() => setRandom(Math.random())}>Generate Random</button> */}
			<p>Random: {random}</p>
			<button className="bg-blue-100 block mb-2 p-2" onClick={onRandom}>
				Generate Random
			</button>

			<button className="bg-blue-100 block mb-2 p-2" onClick={onTitleChange}>
				Set Random Title
			</button>
		</>
	);
}

export default ReactMemoDemo;
