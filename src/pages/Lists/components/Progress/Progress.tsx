import cn from 'classnames';

import styles from './styles.module.scss';

type Props = {
    className?: string;
    value?: number;
    max?: number;
};

export const Progress = ({ className, value: valueNum = 0, max: maxNum = 0 }: Props) => {
    const value = Math.floor(Math.abs(valueNum));
    const max = Math.floor(Math.abs(maxNum));
    const isValid = Number.isFinite(value) && Number.isFinite(value) && max > 0 && value <= max;
    const style = isValid ? { flexGrow: value / max } : undefined;

    return (
        <div className={cn(className, styles.root)}>
            {isValid ? `${value}/${max}` : '–'}
            <div className={styles.track}>
                <div className={styles.progress} style={style} />
            </div>
        </div>
    );
};
