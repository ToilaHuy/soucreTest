import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/Game/gameSlice';
import playerReducer from '../features/player/playerSlice';
import resultReducer from '../features/result/resultSlice';

export const store = configureStore({
    reducer: {
        game: gameReducer,
        player: playerReducer,
        result: resultReducer,
    },
});
