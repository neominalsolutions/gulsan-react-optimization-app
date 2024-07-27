import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './features/user.slice';

export const store = configureStore({
	reducer: {
		userState: UserReducer,
	},
	devTools: process.env.NODE_ENV === 'production' ? false : true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
