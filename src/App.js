import './App.css';
import React from 'react';
import { Landingpage, Blankplayer, Confirmpage, Gamescreen, History, Resultpage } from './layout/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/blankplayer" element={<Blankplayer />} />
                    <Route path="/confirmpage" element={<Confirmpage />} />
                    <Route path="/gamescreen" element={<Gamescreen />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/resultpage" element={<Resultpage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
