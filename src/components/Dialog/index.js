import React, { forwardRef, useImperativeHandle, useState } from 'react';
import 'antd/dist/antd.css';

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
            <Modal footer={null} title="Basic Modal" open={isOpenedDialog} onOk={handleOk} onCancel={handleCancel}>
                <p>{props.children}</p>
            </Modal>
        </>
    );
});

export default Index;
