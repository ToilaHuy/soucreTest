import './App.css';
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { Dialog, Table } from './components/index';

function App() {
    const dialog = useRef();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };
    const handleSubmit = (e) => {
        console.log('haha');
        dialog.current.handleOk();
    };

    return (
        <>
            <h1>hajhajhajhbajhajh</h1>
            <div>ajhvbasjh</div>
            <Button onClick={() => dialog.current.openDialog()} className="btn btn-create color-white">
                Tạo Thêm Thành Viên
            </Button>
            <Dialog ref={dialog}>
                <input value={text} onChange={handleChange} />

                <Button onClick={handleSubmit} className="btn btn-create color-white">
                    Tạo Thêm Thành Viên
                </Button>
            </Dialog>
            <Table></Table>
        </>
    );
}

export default App;
