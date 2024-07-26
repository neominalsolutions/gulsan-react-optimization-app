import React from 'react';
import { FixedSizeList } from 'react-window';

const data = Array.from({ length: 100000 }, (_, index) => `Item ${index}`);

function VirtualizeListDemo() {
	console.log('...rendering');
	const renderRow = ({ index, style }: any) => {
		console.log('index', index);
		return (
			<div
				style={{
					...style,
					display: 'flex',
					alignItems: 'center',
					borderBottom: '1px solid lightgrey',
				}}
			>
				{data[index]}
			</div>
		);
	};

	return (
		<>
			{/* <div>
				{data.map((item: any, index: number) => {
					return <div key={index}>{item}</div>;
				})}
			</div> */}

			<FixedSizeList
				height={1000}
				width={500}
				itemSize={50}
				itemCount={data.length}
			>
				{renderRow}
			</FixedSizeList>
		</>
	);
}

export default VirtualizeListDemo;
