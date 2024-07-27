import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
	name: string;
	username: string;
	email: string;
	id: number;
}

type UserState = {
	loading: boolean;
	data: User[];
	error: any;
	fetched: boolean;
	selected?: User | undefined;
};

// süreci başlatıp apidan veri çekip state aktaracağımız bir api call method yazıyourz

// dispatch edilecek bir state
export const userFetch = createAsyncThunk('USERS', async () => {
	let response = await axios.get<User[]>(
		'https://jsonplaceholder.typicode.com/users'
	);
	let data = response.data;

	console.log('data', data);

	return data;
});

const init: UserState = {
	loading: false,
	data: [],
	error: null,
	fetched: false,
};

const userSlice = createSlice({
	name: 'USERS',
	initialState: init,
	reducers: {
		onSelect: (state: UserState, action: PayloadAction<User>) => {
			// elimdeki statedeki veriyi seçim yaptırdım.
			state.selected = action.payload;
		},
		// apiden çekilmeyen uygulama genelinde senkron verileri yönettiğimiz kısımı
		// buraya state değiştirmek için kullanılan actionlar yazılır
	},
	extraReducers(builder) {
		builder.addCase(
			userFetch.pending,
			(state: UserState, action: PayloadAction<any>) => {
				state.loading = true;
				// veri çekilme anı. daha promise resolve olmadı
			}
		);
		builder.addCase(
			userFetch.fulfilled,
			(state: UserState, action: PayloadAction<User[]>) => {
				// verinin çekilip başarılı olduğu anı temsil eder
				state.loading = false;
				state.fetched = true;
				state.data = action.payload;
			}
		);
		builder.addCase(
			userFetch.rejected,
			(state: UserState, action: PayloadAction<any>) => {
				state.loading = false;
				state.data = [];
				state.error = action.payload;
				state.fetched = false;
			}
		);
		// builder ile asenkron method içindeki her bir durum yönetimini yapıyoruz
		// asenkron işlemleri yönettiğimiz reducer
		// pending, fullfilled, rejected
	},
});

// extra reducer actions dışarında tetiklenen yada müdehale edilen birşey değil
// yukarıdaki tüm fazları kendi kendine yapar.
// store da bunu import edicez.
export const { onSelect } = userSlice.actions;
export const UserReducer = userSlice.reducer;
