import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        addResult: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, key, answer, result) {
                return {
                    payload: {
                        key,
                        name,
                        answer,
                        result,
                        date: new Date().toISOString(),
                    },
                };
            },
        },
    },
});

export const { addResult } = resultSlice.actions;
export const selectAllResult = (state) => state.result;
export default resultSlice.reducer;
