import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        set: (state, action) => {
            if(action.payload){
                state.count = action.payload;
            }else{
                state.count++;
            }
            
        }
    }
});

export const { set } = counterSlice.actions;
export default counterSlice.reducer;