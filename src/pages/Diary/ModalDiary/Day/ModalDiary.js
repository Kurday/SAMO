import React from 'react';
import './ModalDiarly.scss';
import { HabitTracker } from './HabitTracker';
import { Todo } from './ModalTodo';
import { Rituals } from '../../../Diarly/ModalDiarly/Day/ModalRituals';

export const Modal = () => {
    return (
        <div>
            <Rituals />
            <HabitTracker />
            <Todo />
        </div>
    );
};
