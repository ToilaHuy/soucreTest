import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [];

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name) {
                return {
                    payload: {
                        id: initialState.length > 0 ? initialState[initialState.length - 1].id + 1 : 1,
                        name,
                    },
                };
            },
        },
    },
});

export const { addPlayer } = playerSlice.actions;
export const selectAllPlayers = (state) => state.player;
export default playerSlice.reducer;
