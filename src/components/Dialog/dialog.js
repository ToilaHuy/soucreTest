import './dialog.module.scss';
import { Button } from 'antd';

const dialog = () => {
    const handleOpen = () => {};

    const handleClose = () => {};

    const handleSubmit = () => {
        console.log('ahahahah');
    };
    return (
        <div className="wrapper">
            <Button type="primary" onClick={handleSubmit}>
                Button
            </Button>
            <h1>heheheh</h1>
        </div>
    );
};

export default dialog;
