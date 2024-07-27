import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { onSelect, User, userFetch } from '../../redux/features/user.slice';
import { Product } from '../../services/product.service';
import { Button } from 'primereact/button';

function ReduxThunkDemo() {
	const dispatch = useDispatch<AppDispatch>();
	const userState = useSelector((state: RootState) => state.userState);

	console.log('...rendering');

	const onItemSelect = (data: User) => {
		dispatch(onSelect(data));
	};

	console.log('userState-selected', userState.selected);

	// propslar ile çalışırken süslü parantezlere dikkat edelim.
	const UserItemRender = ({ data }: any) => {
		return (
			<div className="p-10" key={data.id}>
				{data.name}

				<Button
					visible={
						userState.selected && userState.selected.id == data.id
							? false
							: true
					}
					onClick={() => onItemSelect(data)}
				>
					Seç
				</Button>
			</div>
		);
	};

	const UserListRender = () => {
		console.log('load');

		return (
			<>
				{userState.data.map((item: User) => {
					return <UserItemRender key={item.id} data={item} />;
				})}
			</>
		);
	};

	useEffect(() => {
		console.log('userState', userState);
		// state redux attığımızdan dolayı eğer ki state yoksa bir daha çekmenin bir anlamı yok.
		if (!userState.fetched) dispatch(userFetch());
	}, []);

	if (userState.loading) return <>Yülkleniyor</>;

	if (userState.error) return <>Hata oluştu</>;

	if (userState.fetched)
		return (
			<>
				<UserListRender />
			</>
		);
}

export default ReduxThunkDemo;
