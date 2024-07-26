import axios from 'axios';
import { useEffect, useState } from 'react';

export function UseFetchData<DataType>(endpoint: string) {
	const [loading, setLoading] = useState<boolean>(false);
	const [fetched, setFetched] = useState<boolean>(false);
	const [data, setData] = useState<DataType>();
	const [error, setError] = useState<any>();

	useEffect(() => {
		setLoading(true);

		axios
			.get(endpoint)
			.then((response) => {
				setData(response.data);
				setLoading(false);
				setFetched(true);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
				setFetched(false);
			});
	}, []);

	return { loading, data, error, fetched };
}
