import './dialog.module.scss';
import { Button } from 'antd';

const dialog = () => {
    const handleOpen = () => {};

    const handleClose = () => {};

    const handleSubmit = () => {
        console.log('ahahahah');
    };
    return (
        <>
            <Button type="primary" onClick={handleSubmit}>
                Button
            </Button>
            <h1>heheheh</h1>
        </>
    );
};

export default dialog;
