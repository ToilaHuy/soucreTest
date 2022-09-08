import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    {
        key: 1,
        question: 'What is the name of the question?',
        answer: 'yes',
    },
    {
        key: 2,
        question: 'What is the name of the question? haha',
        answer: 'no',
    },
    {
        key: 3,
        question: 'What is the name of the question? hahah',
        answer: 'no',
    },
    {
        key: 4,
        question: 'What is the name of the question? haha',
        answer: 'yes',
    },
    {
        key: 5,
        question: 'What is the name of the question?6541165',
        answer: 'yes',
    },
];

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
});

export const selectAllQuestions = (state) => state.game;
export default gameSlice.reducer;
