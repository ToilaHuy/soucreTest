import React, { useRef, useState } from 'react';
import { Header, Dialog } from '../../components/index';
import 'antd/dist/antd.css';
import './index.scss';
import { Table, Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPlayers, addPlayer } from '../../features/player/playerSlice';
import { Link } from 'react-router-dom';

const Index = () => {
    const data = useSelector(selectAllPlayers);
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'NO',
            dataIndex: 'id',
            key: 'age',
        },
        {
            title: 'Player',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
    ];

    const dialog = useRef();
    const [text, setText] = useState('');

    const handleSubmit = () => {
        dispatch(addPlayer(text));
        setText('');
        dialog.current.handleOk();
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleCancel = () => {
        dialog.current.handleCancel();
        setText('');
    };
    return (
        <div className="confirmpage">
            <Header></Header>
            <Table columns={columns} dataSource={data} pagination={false} />
            <div>
                <Button onClick={() => dialog.current.openDialog()}>Add More Player</Button>
                <Link to="/gamescreen">
                    <Button>Start The Game</Button>
                </Link>
                <Dialog ref={dialog}>
                    <div>New Name:</div>
                    <Input placeholder="Basic usage" value={text} onChange={handleChange} />

                    <Button onClick={handleSubmit}>OK</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Dialog>
            </div>
        </div>
    );
};

export default Index;