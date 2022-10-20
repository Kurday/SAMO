import { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
    className?: string;
    label?: ReactNode;
    onLabelClick?: MouseEventHandler<HTMLSpanElement>;
} & Pick<ComponentPropsWithoutRef<'input'>, 'onChange' | 'disabled' | 'name' | 'checked'>;

export const Checkbox = ({ className, label, onLabelClick, ...checkboxProps }: Props) => {
    return (
        <label className={cn(className, styles.checkbox)}>
            <input className={styles.checkboxControl} type="checkbox" {...checkboxProps} />
            <span className={styles.checkboxBox}>
                <svg viewBox="0 0 20 20">
                    <path
                        d="m16.91 6.155-7.493 8.311-4.951-4.76 1.471-1.413 3.371 3.24 6.03-6.688 1.573 1.31Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
            <span
                className={styles.checkboxLabel}
                onClick={(event) => {
                    if (typeof onLabelClick !== 'function') return;
                    event.preventDefault();
                    onLabelClick(event);
                }}
            >
                {label}
            </span>
        </label>
    );
};
