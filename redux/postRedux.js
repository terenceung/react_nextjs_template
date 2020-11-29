import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPost = createAsyncThunk(
    'post/getPost',
    async (data, thunkAPI) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`);
        return response.data;
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: null,
        status: 'idle'
    },
    reducers: {
    },
    extraReducers: {
        [getPost.pending]: (state,action) => {
            state.post = null;
            state.status = 'pending';
        },
        [getPost.fulfilled]: (state, action) => {
            state.post = action.payload
            state.status = 'finish';
        },
        [getPost.rejected]: (state, action) => {
            state.post = null;
            state.status = 'error';
        }
    }
});

export default postSlice.reducer;