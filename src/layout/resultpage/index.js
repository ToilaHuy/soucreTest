import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Table } from 'antd';
import { selectAllQuestions } from '../../features/Game/gameSlice';
import { selectAllPlayers } from '../../features/player/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllResult } from '../../features/result/resultSlice';
import './index.scss';

const Index = () => {
    const navigate = useNavigate();
    const questions = useSelector(selectAllQuestions);
    const players = useSelector(selectAllPlayers);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const allResult = useSelector(selectAllResult);
    const [questionCount, setQuestionCount] = useState(allResult[allResult.length - 1]?.key || 0);
    const coverDate = (item) => {
        const date = new Date();

        const dateAt = ` ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return dateAt;
    };

    const matchResult = allResult.filter((match) => {
        if (match.matchId === questionCount) {
            return match;
        }
    });

    const search = matchResult.filter((item) => item.name.includes(text));

    const itemTable = search.map((result, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{result.name}</td>
                <td>{coverDate(result.date)}</td>
                <td>{result.answer}</td>
                <td>{result.result}</td>
                <td>{result.result === 'yes' ? '1' : '0'}</td>
            </tr>
        );
    });
    const getTotal = (item) => {
        let sum = 0;
        allResult.map((total) => {
            if (total?.name === item && total?.result === 'yes') {
                return (sum = sum + 1);
            }
        });
        return sum;
    };

    const winner = players.map((result) => {
        return {
            name: result.name,
            point: getTotal(result.name),
        };
    });
    const winnerGame = Math.max(...winner.map((result) => result.point));
    const winGame = winner.filter((result) => result.point === winnerGame);
    console.log(winGame);
    const namePlayers = players.map((result, index) => {
        return (
            <tr key={index}>
                <td>{result?.name}</td>
                <td>{(getTotal(result?.name) / 5) * 100} %</td>
                <td>{getTotal(result?.name)}</td>
            </tr>
        );
    });

    return (
        <div className="history-container">
            <div className="history-header">
                <div>Yes No WTF history</div>
            </div>
            <div className="history-match"> Match {questions[questions.length - 1]?.key}</div>
            <Input className="history-input" placeholder="Search ..." value={text} onChange={handleChange} />
            {/* <Table columns={columns} dataSource={allResult} pagination={false} /> */}
            <table>
                <tr>
                    <th>No.</th>
                    <th>Player</th>
                    <th>Date</th>
                    <th>Answer</th>
                    <th>Result</th>
                    <th>Score</th>
                </tr>
                {itemTable}
                <tr>
                    <th>Sumary</th>
                    <th>Correct percent</th>
                    <th>Total score</th>
                </tr>
                {namePlayers}
            </table>
            <div>The winner is: {winGame[0].name}</div>
            <div style={{ marginTop: '10px' }}>
                <Button
                    onClick={() => {
                        navigate('../', { replace: true });
                    }}
                >
                    End Game
                </Button>
            </div>
        </div>
    );
};

export default Index;
