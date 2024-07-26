import axios from 'axios';

export interface Product {
	ProductID: number;
	ProductName: string;
	UnitPrice: number;
}

export const getProducts = async (endpoint: string) => {
	const response = await axios.get(
		`https://services.odata.org/northwind/northwind.svc/${endpoint}`
	);

	console.log('data', response.data);

	return response.data.value;
};
