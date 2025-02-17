import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/User';
import { RootState } from '@/app/store';
import { accountApi } from './account-api';

interface AccountState {
  account: User | null;
  status: 'idle' | 'loading' | 'failed';
  photoStatus: 'idle' | 'loading' | 'failed';
}

const initialState: AccountState = {
  account: null,
  status: 'idle',
  photoStatus: 'idle',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<User | null>) => {
      state.account = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(accountApi.endpoints.getAccountMe.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(accountApi.endpoints.getAccountMe.matchFulfilled, (state) => {
        state.status = 'idle';
      })
      .addMatcher(accountApi.endpoints.getAccountMe.matchRejected, (state) => {
        state.status = 'failed';
      })
      .addMatcher(accountApi.endpoints.getAccountPhoto.matchPending, (state) => {
        state.photoStatus = 'loading';
      })
      .addMatcher(accountApi.endpoints.getAccountPhoto.matchFulfilled, (state) => {
        state.photoStatus = 'idle';
      })
      .addMatcher(accountApi.endpoints.getAccountPhoto.matchRejected, (state) => {
        state.photoStatus = 'failed';
      });;
  },
});

export const { setAccount } = accountSlice.actions;
export const selectAccount = (state: RootState) => state.account.account;

export default accountSlice.reducer;
