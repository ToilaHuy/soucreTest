import React, { useRef, useState } from 'react';
import { Header, Dialog } from '../../components/index';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer } from '../../features/player/playerSlice';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.scss';
const Index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const dialog = useRef();
    const handleSubmit = (e) => {
        dispatch(addPlayer(text));
        setTimeout(() => {
            navigate('../confirmpage', { replace: true });
        }, 200);
        dialog.current.handleOk();
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div className="blankplayer">
            <Header></Header>
            <Button onClick={() => dialog.current.openDialog()}>Add Player</Button>
            <Dialog ref={dialog}>
                <div>New Name:</div>
                <Input placeholder="Name..." value={text} onChange={handleChange} />

                <Button onClick={handleSubmit}>OK</Button>
                <Button onClick={() => dialog.current.handleCancel()}>Cancel</Button>
            </Dialog>
        </div>
    );
};

export default Index;
