import { memo, useMemo, useCallback } from 'react';
import { DateTime } from 'luxon';

import { ClockIcon, CheckedFavoriteIcon, DoneIcon } from 'assets/icons';
import cn from 'classnames';
import './index.scss';

const GoalItem = (props) => {
    const { goal, color, bg, openModalEdit, dateValue, fromBalance } = props;
    const openEditModal = useCallback(
        () => openModalEdit(fromBalance ? { ...goal, dateValue } : goal),

        [openModalEdit, goal, dateValue, fromBalance],
    );

    const time = DateTime.fromISO(goal.date);
    const colorOfItem = useMemo(
        () => ({
            '--sphereGoalItem-color': color,
            '--sphereGoalItem-bg': bg,
        }),
        [color, bg],
    );
    return (
        <>
            <div
                className={cn({ goal__item: true, doneGoal: goal.done })}
                onClick={openEditModal}
                style={colorOfItem}
            >
                <div className="goal__item-content">
                    <p>{goal.text}</p>
                    {goal.favorite && <CheckedFavoriteIcon />}
                </div>
                <div className="goal__item-date">
                    <ClockIcon />
                    <span>{time?.toFormat('dd.MM')}</span>
                </div>
                {!!goal?.image && (
                    <div className="goal__item-image">
                        <img src={goal?.image} width={232} alt="goal pic" />
                    </div>
                )}
                {goal.done && (
                    <div className="goal__item-done-icon">
                        <DoneIcon />
                    </div>
                )}
            </div>
        </>
    );
};

export default memo(GoalItem);
