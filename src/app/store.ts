import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authReducer from '@/features/auth/auth-slice';
import userReducer from '@/features/user/user-slice';
import accountReducer from '@/features/account/account-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    account: accountReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
