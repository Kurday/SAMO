import { memo } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import cn from 'classnames';
import './index.scss';

const GoalProgressBar = (props) => {
    const { goalsCount, goalsDoneCount } = props;
    return (
        <div
            className={cn({
                purposeCount: true,
                goalContainer: true,
                minPadding: true,
                goalInternalContainer: true,
            })}
        >
            <h2>Целей достигнуто</h2>
            <div className="doneGoalProgress">
                <CircularProgressbar
                    strokeWidth={11}
                    maxValue={goalsCount || 1}
                    value={goalsDoneCount || 0}
                    text={`${goalsDoneCount || 0}/${goalsCount || 0}`}
                />
            </div>
        </div>
    );
};

export default memo(GoalProgressBar);
