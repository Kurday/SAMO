import { memo } from 'react';
import { useGoalModalContext } from '..';

import { sphereDataOption } from 'config/constants';
import { sphereColor } from 'utils/colors';

import {
    CloseIcon,
    CheckedIcon,
    FavoriteIcon,
    TextAreaIcon,
    AttachmentIcon,
    ClockIcon,
    DialogIcon,
    CheckedFavoriteIcon,
    TrashIcon,
    EditIcon,
} from 'assets/icons';

import cn from 'classnames';

const GoalRead = (props) => {
    const {
        setFavourite,
        close,
        isFavourite,
        goalName,
        descriptionContent,
        image,
        missionsData,
        setEditCheckbox,
        // setCheckboxes,
        commentaryContent,
        sphere,
        setFavouritePatch,
        editMode,
        canAddToFavorite,
    } = useGoalModalContext();
    const { deleteGoal, editModeChange, formattedDate, doneGoal, goalDone, unDoneGoal } = props;
    return (
        <>
            <div className="goal__modal__header">
                <div className="goal__modal__header__actions">
                    {canAddToFavorite && (
                        <button onClick={() => (editMode ? setFavourite() : setFavouritePatch())}>
                            {isFavourite ? <CheckedFavoriteIcon /> : <FavoriteIcon />}
                        </button>
                    )}

                    <button onClick={editModeChange}>
                        <EditIcon />
                    </button>
                    <button onClick={deleteGoal}>
                        <TrashIcon />
                    </button>
                    <button onClick={close}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="goal__modal__name">
                    <div className="goal__name">
                        <p>{goalName}</p>
                    </div>
                </div>
            </div>
            {!!image && (
                <div
                    className={cn({
                        'goal__modal__attachement': true,
                        'content-container': true,
                    })}
                >
                    <AttachmentIcon />

                    <img src={image} width={229} alt="GoalImage" />
                </div>
            )}
            <div className="goal__modal__content">
                <div
                    className={cn({
                        'goal__modal__description': true,
                        'content-container': true,
                    })}
                >
                    <TextAreaIcon />

                    <p>{descriptionContent}</p>
                </div>

                <div
                    className={cn({
                        'goal__modal__date': true,
                        'content-container': true,
                    })}
                >
                    <ClockIcon />

                    <p>{formattedDate}</p>
                </div>
                {/* <div
                    className={cn({
                        'goal__modal__checklist': true,
                        'content-container': true,
                    })}
                >
                    <CheckedIcon />
                    <button>
                        <span>Чек-лист</span>
                    </button>
                    <div className="goal__modal__mission">
                        {!!missionsData?.length &&
                            missionsData?.map((item) => (
                                <div className="goal__modal__mission-item">
                                    <input disabled type="checkbox" />
                                    <input
                                        value={item.text}
                                        onChange={(e) => setEditCheckbox(item, e)}
                                    />
                                </div>
                            ))}
                    </div>
                </div> */}
                <div className="goal__modal__progressbar">
                    <div className="goalCreaterProgressBarFiller" />
                </div>
                {!!commentaryContent && (
                    <div
                        className={cn({
                            'goal__modal__comment': true,
                            'content-container': true,
                        })}
                    >
                        <DialogIcon />

                        <p>{commentaryContent}</p>
                    </div>
                )}
                <div
                    className={cn({
                        'goal__modal__sphere': true,
                        'content-container': true,
                    })}
                >
                    <div
                        className={cn({
                            sphereColorBlock: true,
                        })}
                        style={{ background: sphereColor(sphere)?.color }}
                    />
                    <span className="goalColorText">Сфера:</span>

                    <p>{sphereDataOption.find((item) => item?.value === sphere).title}</p>
                </div>

                <div className="goal__modal-edit__buttons">
                    {/* <button className="saveButton" disabled={!goalDone} onClick={unDoneGoal}>
                        Отложить
                    </button> */}
                    {goalDone ? (
                        <button className="saveButton" onClick={unDoneGoal}>
                            Не сделано
                        </button>
                    ) : (
                        <button className="saveButton" disabled={goalDone} onClick={doneGoal}>
                            Сделано
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default memo(GoalRead);
