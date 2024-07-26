import React, { useCallback, useEffect, useState } from 'react';
import useSWR, { Fetcher } from 'swr';
import { getProducts, Product } from '../../services/product.service';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { Dropdown } from 'primereact/dropdown';

function SwrDemo() {
	const [pageSize, setPageSize] = useState<number>(5);
	const [pageIndex, setPageIndex] = useState<number>(0);

	const fetcher: Fetcher<Product[], string> = (endpoint: string) =>
		getProducts(endpoint);

	// toplam kayıt sayısını buradan buluyoruz
	const { isLoading, data, error } = useSWR('/Products', fetcher, {
		errorRetryCount: 3,
		revalidateOnFocus: false, // tab değişikliklerinde yada oturumu açık bırakıp gitiğimizde arayüze foculandığımız olur. default true.
		revalidateOnReconnect: false, // internet koparsa yeni internet yüklendiğinde cacheden mi okusun yoksa yeniden veriyi apiden mi çeksin default true
	});

	const pagedResult = useSWR(
		`/Products?$skip=${pageIndex * pageSize}&$top=${pageSize}&format=json`,
		fetcher,
		{
			errorRetryCount: 3,
			revalidateOnFocus: false, // tab değişikliklerinde yada oturumu açık bırakıp gitiğimizde arayüze foculandığımız olur.
			revalidateOnReconnect: false,
		}
	);

	const onPageChange = useCallback((event: any) => {
		console.log('event', event);
		setPageIndex(event.page);
		setPageSize(event.rows);
	}, []);

	if (pagedResult.data) {
		return (
			<>
				<div>Yüklenen: {pagedResult.data.length}</div>
				{/* <DataTable value={pagedResult.data} tableStyle={{ minWidth: '50rem' }}>
					<Column field="ProductName" header="ProductName"></Column>
					<Column field="UnitPrice" header="UnitPrice"></Column>
				</DataTable>
				<Paginator
					rowsPerPageOptions={[5, 10, 20]}
					rows={pageSize}
					totalRecords={data?.length}
					onPageChange={onPageChange}
				/> */}
				<p className="text-right">Toplam Kayıt Sayıs: {data?.length}</p>
			</>
		);
	}

	if (isLoading) return <>Yükleme yapılıyor</>;

	if (data) return <>Veri adeti: {data.length}</>;

	if (error) return <>Hata</>;

	return <></>;
}

export default SwrDemo;
