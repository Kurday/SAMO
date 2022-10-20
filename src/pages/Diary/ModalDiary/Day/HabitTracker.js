import React from 'react';
import './ModalDiary.scss';
import { CloseIcon } from '../../../../assets/icons';
import cn from 'classnames';
import { memo } from 'react';

export const HabitTracker = memo((props) => {
    return (
        <div className={cn({ modal__wrapper: true, open: props.isOpened, close: !props.isOpened })}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    <CloseIcon />
                </div>
                <div className="block__title">Ежедневный трекер привычек</div>
                <button className="modal__button">Сохранить</button>
            </div>
        </div>
    );
});
