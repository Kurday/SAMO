import { sphereDataOption } from 'config/constants';
import { sphereColor } from 'utils/colors';

import {
    CloseIcon,
    CheckedIcon,
    FavoriteIcon,
    TextAreaIcon,
    AttachmentIcon,
    PlusIcon,
    ClockIcon,
    DialogIcon,
    CheckedFavoriteIcon,
    TrashIcon,
} from 'assets/icons';

import cn from 'classnames';
import { memo } from 'react';
import { useGoalModalContext } from '..';

const GoalForm = (props) => {
    const {
        setFavourite,
        close,
        isFavourite,
        goalName,
        setGoal,
        descriptionContent,
        setDescription,
        image,
        onButtonClick,
        deleteAttachement,
        inputFile,
        uploadFile,
        setDate,
        dateValue,
        checkboxData,
        setEditCheckbox,
        setCheckboxes,
        setDeleteCheckbox,
        setCommentary,
        commentaryContent,
        sphere,
        sphereOnChange,
        disabledButtonCheck,
    } = useGoalModalContext();
    const { submit, submitButtonContent, edit } = props;
    return (
        <>
            <div className="goal__modal__header">
                <div className="goal__modal__header__actions">
                    <button onClick={setFavourite}>
                        {isFavourite ? <CheckedFavoriteIcon /> : <FavoriteIcon />}
                    </button>
                    <button onClick={close}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="goal__modal__name">
                    <input
                        type="text"
                        placeholder="Добавьте цель*"
                        value={goalName}
                        onChange={setGoal}
                    />
                </div>
            </div>
            <div className="goal__modal__content">
                <div
                    className={cn({
                        'goal__modal__description': true,
                        'content-container': true,
                    })}
                >
                    <TextAreaIcon />
                    <textarea
                        type="text"
                        placeholder="Добавьте описание"
                        value={descriptionContent}
                        onChange={setDescription}
                    />
                </div>
                <div
                    className={cn({
                        'goal__modal__attachement': true,
                        'content-container': true,
                    })}
                >
                    <AttachmentIcon />
                    <button disabled={image} onClick={onButtonClick}>
                        <span>Добавить вложение</span>
                        <PlusIcon />
                    </button>
                    <input
                        accept="image/*"
                        type="file"
                        multiple
                        ref={inputFile}
                        onChange={uploadFile}
                        style={{ display: 'none' }}
                    />
                    {!!image && (
                        <div className="goal__modal__attachement__image">
                            <div className="goal__modal__attachement__image-text">
                                <button onClick={deleteAttachement}>
                                    <TrashIcon />
                                </button>
                                <span>{image.name}</span>
                            </div>
                            {edit && !!image ? (
                                <img alt="not found" width={300} src={image} />
                            ) : (
                                <img alt="not found" width={300} src={URL.createObjectURL(image)} />
                            )}
                        </div>
                    )}
                </div>
                <div
                    className={cn({
                        'goal__modal__date': true,
                        'content-container': true,
                    })}
                >
                    <ClockIcon />
                    <input
                        type="text"
                        placeholder="Выберите дату*"
                        onFocus={(e) => (e.currentTarget.type = 'date')}
                        onBlur={(e) => (e.currentTarget.type = 'text')}
                        value={dateValue}
                        onChange={setDate}
                    />
                </div>
                {/* <div
                    className={cn({
                        'goal__modal__checklist': true,
                        'content-container': true,
                    })}
                >
                    <CheckedIcon />
                    <button onClick={setCheckboxes}>
                        <span>Добавить чек-лист</span>
                        <PlusIcon />
                    </button>
                    <div className="goal__modal__mission">
                        {!!checkboxData?.length &&
                            checkboxData?.map((item) => (
                                <div className="goal__modal__mission-item">
                                    <button onClick={() => setDeleteCheckbox(item)}>
                                        <TrashIcon />
                                    </button>
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
                <div
                    className={cn({
                        'goal__modal__comment': true,
                        'content-container': true,
                    })}
                >
                    <DialogIcon />
                    <textarea
                        type="text"
                        placeholder="Напишите комментарий"
                        value={commentaryContent}
                        onChange={setCommentary}
                    />
                </div>
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

                    <select
                        className={cn({
                            'goal__modal__sphere__color': true,
                            'content-container': true,
                        })}
                        onChange={sphereOnChange}
                        value={sphere}
                    >
                        <option value="" selected disabled hidden>
                            Выбрать опцию
                        </option>
                        {sphereDataOption?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="goal__modal__submit-button">
                    <button className="saveButton" disabled={disabledButtonCheck} onClick={submit}>
                        {submitButtonContent}
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(GoalForm);
