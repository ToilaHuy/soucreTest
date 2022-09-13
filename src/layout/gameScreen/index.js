import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import axios from '../../api/axios';

import './index.scss';
import { selectAllPlayers } from '../../features/player/playerSlice';
import { addResult } from '../../features/result/resultSlice';
import { useNavigate } from 'react-router-dom';
import { selectAllResult } from '../../features/result/resultSlice';

const Index = () => {
    const navigate = useNavigate();
    const allResult = useSelector(selectAllResult);
    const players = useSelector(selectAllPlayers);
    const [questionCount, setQuestionCount] = useState(allResult[allResult.length - 1]?.matchId || 1);
    const [check, setCheck] = useState('');
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState('');
    const [answerApi, setAnswerApi] = useState('');

    const [loadings, setLoadings] = useState([]);
    const [playerCount, setPlayerCount] = useState(allResult[allResult.length - 1]?.playerCount || 0);
    const [showBtn, setShowBtn] = useState(true);
    const [image, setImage] = useState();
    const [isEnd, setIsEnd] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
    };

    const handleClickYes = () => {
        setAnswer('yes');
        setIsDisabled(false);
    };
    const handleClickNo = () => {
        setAnswer('no');
        setIsDisabled(false);
    };
    useEffect(() => {
        if (playerCount === players.length) {
            setQuestionCount(questionCount + 1);
            dispatch(addResult(null, questionCount + 1, null, null));
            setPlayerCount(0);
        }
    }, [showBtn]);
    if (playerCount === players.length) {
    }

    useEffect(() => {
        axios.getImage().then((response) => {
            setImage(response.image);
            setAnswerApi(response.answer);
        });
    }, [showBtn]);

    useEffect(() => {
        answerApi === answer ? setCheck('yes') : setCheck('no');
    }, [answer]);

    const handleSubmit = () => {
        enterLoading(0);
        dispatch(addResult(players[playerCount]?.name, questionCount, answer, check, playerCount + 1));
        setTimeout(() => {
            setResult(check);
            setShowBtn(false);
            if (questionCount === 5 && playerCount + 1 === players.length) {
                setIsEnd(true);
                setQuestionCount(0);
                setResult('');
            }
        }, 1000);
    };
    const handleNextPlayer = () => {
        setShowBtn(true);
        setResult('');
        setAnswer('');
        setPlayerCount(playerCount + 1);
        setIsDisabled(true);
    };

    return (
        <div className="game-container">
            <div className="game-header">
                <div>Yes No WTF Game</div>
                <Button
                    onClick={() => {
                        navigate('../history', { replace: true });
                    }}
                >
                    Player History
                </Button>
            </div>
            <div className="game-match"> Match {questionCount}</div>
            <div className="game-player">Player: {players[playerCount]?.name}</div>

            <div className="game-choose">
                <Button onClick={handleClickYes}>YES</Button>
                {result === 'yes' && <div className="game-result">Correct</div>}
                {result === 'no' && <div className="game-result-wrong">Incorrect</div>}
                <Button onClick={handleClickNo}>NO</Button>
            </div>
            {result.length > 0 && (
                <div>
                    <img className="game-image" src={image} alt="" />
                </div>
            )}
            <div className="game-submit">
                {showBtn && !isEnd && (
                    <Button
                        disabled={isDisabled}
                        loading={loadings[0]}
                        onClick={handleSubmit}
                        style={{ backgroundColor: '#105db1a3', fontWeight: 'bold', color: 'black' }}
                    >
                        Submit
                    </Button>
                )}
                {!showBtn && !isEnd && (
                    <Button onClick={handleNextPlayer} style={{ backgroundColor: '#c742aa' }}>
                        {playerCount + 1 === players.length ? 'Next game' : 'Next player'}
                    </Button>
                )}
                {isEnd && <div>END GAME</div>}
                {isEnd && (
                    <Button
                        onClick={() => {
                            navigate('../resultpage', { replace: true });
                        }}
                    >
                        View results
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Index;
