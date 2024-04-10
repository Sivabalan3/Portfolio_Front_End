import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';

export const registerUser = createAsyncThunk(
  'users/register',
  async (user, thunkAPI) => {
    const { username, email, password } = user;
    try {
      const response = await axios.post(BASE_URL+'/api/users/register', { username, email, password });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
