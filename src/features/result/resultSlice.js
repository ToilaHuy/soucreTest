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
            prepare(name, matchId, answer, result, playerCount) {
                return {
                    payload: {
                        matchId,
                        name,
                        answer,
                        result,
                        playerCount,
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
