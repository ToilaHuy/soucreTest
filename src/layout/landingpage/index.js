import React from 'react';
import { Header } from '../../components/index';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
const Index = () => {
    return (
        <div className="landingpage">
            <Header></Header>
            <Link to="/blankplayer">
                <Button>Start Game</Button>
            </Link>
        </div>
    );
};

export default Index;
