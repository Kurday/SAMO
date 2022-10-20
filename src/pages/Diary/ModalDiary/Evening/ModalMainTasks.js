import React from 'react';
import cn from 'classnames';
import { memo } from 'react';
import { CloseIcon } from '../../../../assets/icons';

export const MainTasks = memo((props) => {
    return (
        <div className={cn({ modal__wrapper: true, open: props.isOpened, close: !props.isOpened })}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    <CloseIcon />
                    <div className="dark__title">Главные задачи на завтра</div>
                </div>
            </div>
        </div>
    );
});
