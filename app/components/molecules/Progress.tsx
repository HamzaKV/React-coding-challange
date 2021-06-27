import React from 'react';
import { default as Spinner } from '../atoms/Spinner';

export interface IProps {
    type?: 'linear' | 'circular';
}

const Progress = ({ type = 'circular' }: IProps) => {
    switch (type) {
        case 'circular':
        default:
            return <Spinner />;
    }
};

export default Progress;