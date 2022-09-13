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
                        id: nanoid(),
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
