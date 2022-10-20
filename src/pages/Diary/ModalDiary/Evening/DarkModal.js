import React from 'react';
import { IsDone } from './ModalIsDone';
import { HowHappy } from './ModalHowHappy';
import { MainTasks } from './ModalMainTasks';

export const DarkModal = () => {
    return (
        <>
            <IsDone />
            <HowHappy />
            <MainTasks />
        </>
    );
};
