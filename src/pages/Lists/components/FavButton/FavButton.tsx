import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import styles from './styles.module.scss';

type Props = {
    className?: string;
    label?: string;
    checked?: boolean;
} & Pick<ComponentPropsWithoutRef<'button'>, 'disabled' | 'onClick'>;

export const FavButton = ({ className, checked = false, disabled, label, onClick }: Props) => {
    return (
        <button
            type="button"
            className={cn(className, styles.root, disabled && styles.disabled)}
            role="checkbox"
            aria-label={label}
            aria-checked={checked}
            onClick={onClick}
            disabled={disabled}
        >
            <svg width="100%" height="100%" viewBox="0 0 15 15">
                {checked ? (
                    <path
                        d="M6.377.728a1.23 1.23 0 0 1 2.246 0l1.639 3.462 3.665.555c1.027.155 1.437 1.47.694 2.226l-2.653 2.695.626 3.806c.176 1.066-.898 1.88-1.816 1.375L7.5 13.05l-3.278 1.796c-.918.503-1.992-.31-1.816-1.375l.626-3.806L.379 6.971c-.742-.755-.333-2.07.694-2.226l3.665-.556L6.378.728Z"
                        fill="#25315B"
                    />
                ) : (
                    <path
                        d="M6.377.728a1.23 1.23 0 0 1 2.246 0l1.639 3.462 3.665.555c1.027.155 1.437 1.47.694 2.226l-2.653 2.695.626 3.806c.176 1.066-.898 1.88-1.816 1.375L7.5 13.05l-3.278 1.796c-.918.503-1.992-.31-1.816-1.375l.626-3.806L.379 6.971c-.742-.755-.333-2.07.694-2.226l3.665-.556L6.378.727ZM7.5 2.288 6.138 5.165c-.09.19-.223.354-.387.478a1.224 1.224 0 0 1-.556.235l-3.046.462 2.205 2.24c.145.147.254.33.316.531.063.201.078.415.043.624l-.52 3.162 2.724-1.493a1.21 1.21 0 0 1 1.166 0l2.724 1.493-.52-3.162a1.359 1.359 0 0 1 .043-.624c.062-.201.171-.384.316-.531l2.204-2.24-3.046-.46c-.2-.031-.391-.112-.555-.236a1.293 1.293 0 0 1-.387-.478L7.5 2.288Z"
                        fill="#25315B"
                    />
                )}
            </svg>
        </button>
    );
};
