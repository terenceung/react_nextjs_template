import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        nums: [0,0],
        operator: '+',
        result: 0
    },
    reducers: {
        add: (state, action) => {
            state.operator = '+';
            state.nums = action.payload.nums;
            state.result = action.payload.nums[0] + action.payload.nums[1];
        },
        subtract: (state, action) => {
            state.operator = '-';
            state.nums = action.payload.nums;
            state.result = action.payload.nums[0] - action.payload.nums[1];
        }
    }
});

export const { add, subtract } = calculatorSlice.actions;
export default calculatorSlice.reducer;