import React from 'react';
import cn from 'classnames';
import { memo } from 'react';
import { CloseIcon } from '../../../../assets/icons';

export const IsDone = memo((props) => {
    return (
        <div className={cn({ modal__wrapper: true, open: props.isOpened, close: !props.isOpened })}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    <CloseIcon />
                    <div className="dark__title">Что было сделано сегодня</div>
                    <div>Какие ключевые действия я сделал для достижения цели?</div>
                    <div>Что можно было сделать лучше</div>
                    <div>Что хорошего произошло</div>
                    <div>Мои достижения</div>
                    <div>Кого я хочу поблагодарить</div>
                </div>
            </div>
        </div>
    );
});
