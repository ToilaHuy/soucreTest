import React, { forwardRef, useImperativeHandle, useState } from 'react';
import 'antd/dist/antd.css';
import './index.scss';

import { Modal } from 'antd';

const Index = forwardRef((props, ref) => {
    const [isOpenedDialog, setIsOpenedDialog] = useState(false);

    const openDialog = () => {
        setIsOpenedDialog(true);
    };
    const handleCancel = () => {
        setIsOpenedDialog(false);
    };
    const handleOk = () => {
        setIsOpenedDialog(false);
    };
    useImperativeHandle(ref, () => ({
        openDialog,
        handleOk,
        handleCancel,
    }));

    return (
        <>
            <Modal
                title="please enter a new name"
                footer={null}
                open={isOpenedDialog}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="dialog">{props.children}</div>
            </Modal>
        </>
    );
});

export default Index;
