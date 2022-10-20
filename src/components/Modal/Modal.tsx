import { FC, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

const modalRoot = document.getElementById('modal-root');

type Props = {
    className?: string;
    open?: boolean;
    onClose?: () => void;
};

export const Modal: FC<Props> = ({ children, onClose, open = false }) => {
    useLayoutEffect(() => {
        if (!open) return;
        document.documentElement.classList.add(styles.hasModal);
        return () => {
            document.documentElement.classList.remove(styles.hasModal);
        };
    }, [open]);

    useEffect(() => {
        if (typeof onClose !== 'function') return;

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

    if (modalRoot == null) {
        throw new Error('#modal-root element not found in document');
    }

    if (!open) {
        return null;
    }

    return createPortal(
        <div
            className={styles.modalBackdrop}
            onClick={(event) => {
                if (onClose == null || event.target !== event.currentTarget) return;
                onClose();
            }}
        >
            <div>{children}</div>
        </div>,
        modalRoot,
    );
};
