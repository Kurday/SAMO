import { CloseIcon } from '../../../../assets/icons';
import React from 'react';
import { memo } from 'react';
import cn from 'classnames';
import './ModalDiary.scss';

export const Todo = memo((props) => {
    return (
        <div className={cn({ modal__wrapper: true, open: props.isOpened, close: !props.isOpened })}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    <CloseIcon />
                </div>
                <div className="block__title">Список дел на сегодня</div>
                <button className="modal__button">Сохранить</button>
            </div>
        </div>
    );
});
