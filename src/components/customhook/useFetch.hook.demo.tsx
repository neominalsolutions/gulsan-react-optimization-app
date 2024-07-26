import React from 'react';
import { UseFetchData } from './useFetchData.hook';

interface Todo {
	title: string;
	completed: boolean;
	id: number;
}

function UseFetchHookDemo() {
    
	const { loading, error, fetched, data } = UseFetchData<Todo[]>(
		'https://jsonplaceholder.typicode.com/todos'
	);

	if (loading) return <>... Yükleniyor</>;

	if (fetched)
		return (
			<ul>
				{data?.map((item: Todo) => {
					return <div key={item.id}>{item.title}</div>;
				})}
			</ul>
		);

	if (error) return <>Hata oluştu</>;

	return <></>;
}

export default UseFetchHookDemo;
