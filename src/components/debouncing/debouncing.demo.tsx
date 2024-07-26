import React, { useMemo, useState } from 'react';
import useSWR, { Fetcher } from 'swr';
import { getProducts, Product } from '../../services/product.service';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { ListBox } from 'primereact/listbox';
import { InputText } from 'primereact/inputtext';
import debounce from '../../services/debounce.service';

function DebouncingDemo() {
	const [searchText, setSearchText] = useState<string>('');

	const fetcher: Fetcher<Product[], string> = (endpoint: string) =>
		getProducts(endpoint);

	const { isLoading, data, error } = useSWR(
		`/Products?$filter=substringof('${searchText}',ProductName)&$format=json`,
		fetcher,
		{
			errorRetryCount: 3,
		}
	);

	// searchText set etmek için 500 ms bir memoization sağlamak. input değiştiğinde hemen serachText state set etmiyoruz.
	const onSearch = useMemo(
		() =>
			debounce((e: any) => {
				setSearchText(e.target.value);
			}, 500),
		[searchText]
	);

	return (
		<>
			<InputText
				className="mb-2 p-2"
				defaultValue={searchText}
				onChange={onSearch}
			/>

			<div className="card flex justify-content-center">
				<ListBox
					value={0}
					options={data}
					optionLabel="ProductName"
					className="w-full md:w-14rem"
				/>
			</div>
		</>
	);
}

export default DebouncingDemo;
