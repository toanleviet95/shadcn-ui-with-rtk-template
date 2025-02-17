// Below code is only using for example

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/User';
import { RootState } from '@/app/store';
import { userApi } from './user-api';

interface UserState {
  users: User[];
  selectedUser: User | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addMatcher(userApi.endpoints.getUsers.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addMatcher(userApi.endpoints.getUsers.matchRejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSelectedUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users;
export const selectSelectedUser = (state: RootState) => state.user.selectedUser;

export default userSlice.reducer;
