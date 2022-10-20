import {
    createContext,
    memo,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import { DateTime } from 'luxon';
import cn from 'classnames';
import { GoalModalContextState } from './kit';
import { deleteData, patchData, postData } from 'service';

import { GoalRead, GoalForm } from './components';
import { Overlay } from 'components/Overlay';

const GoalModal = (props) => {
    const { sphereValue, close, setGoalData, goalData, create, goal, read, sphereValueTime } =
        props;
    const inputFile = useRef(null);
    const ref = useRef(null);
    const [goalName, setGoalName] = useState(goal?.data.text ?? '');
    const [sphere, setSphere] = useState(goal?.data.sphere.slug ?? sphereValue ?? '');
    const [checkboxData, setCheckboxData] = useState(goal?.data.checkboxes ?? []);
    const [descriptionContent, setDescriptionContent] = useState(goal?.data.description ?? '');
    const [commentaryContent, setCommentaryContent] = useState(goal?.data.comment ?? '');
    const [dateValue, setDateValue] = useState(goal?.data.date ?? '');
    const [isFavourite, setIsFavourite] = useState(goal?.data.favorite ?? false);
    const [image, setImage] = useState(goal?.data.image ?? '');
    const [edit, setEdit] = useState(false);
    const [readMode, setReadMode] = useState(read ?? false);
    console.log(props);

    const canAddToFavorite = useMemo(() => {
        if (goal?.data?.favorite || goal?.can_add_favorite) {
            return true;
        } else {
            return false;
        }
    }, [goal]);

    const dateOrSphere = useMemo(
        () => goal?.data.dateValue ?? sphere,
        [goal?.data.dateValue, sphere],
    );

    const date = DateTime.fromISO(goal?.data.date);
    const formattedDate = useMemo(
        () => date.weekdayLong + ', ' + date.day + ' ' + date.monthLong,
        [date],
    );

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [close]);

    const editModeChange = useCallback(() => {
        setEdit(!edit);
        setReadMode(false);
    }, [setEdit, edit]);

    const disabledButtonCheck = useMemo(() => {
        if (!dateValue || !goalName) {
            return true;
        } else {
            return false;
        }
    }, [dateValue, goalName]);

    const deleteAttachement = useCallback(() => {
        setImage('');
        inputFile.current.value = '';
    }, [setImage]);

    const setCheckboxes = useCallback(() => {
        setCheckboxData([
            ...checkboxData,
            {
                text: 'Новая задача',
                key: !!checkboxData.length ? checkboxData[checkboxData.length - 1]?.key + 1 : 1,
            },
        ]);
    }, [checkboxData]);

    const editGoal = useCallback(() => {
        const formData = new FormData();

        if (image !== goal?.data.image) {
            formData.append('image', image);
        }
        formData.append('description', descriptionContent);
        formData.append('text', goalName);
        formData.append('date', dateValue);
        formData.append('comment', commentaryContent);
        formData.append('sphere', sphere);
        formData.append('favorite', isFavourite);

        patchData(`goals/${goal?.data.id}/`, formData).then((res) => {
            setGoalData({
                ...goalData,
                [dateOrSphere]: goalData[dateOrSphere]?.map((item) =>
                    item?.id === goal?.data.id ? res.data : item,
                ),
            });
        });
        close();
    }, [
        close,
        commentaryContent,
        dateOrSphere,
        dateValue,
        descriptionContent,
        goal,
        goalData,
        goalName,
        image,
        isFavourite,
        setGoalData,
        sphere,
    ]);

    const deleteGoal = useCallback(() => {
        deleteData(`goals/${goal?.data.id}/`).then(() => {
            setGoalData({
                ...goalData,
                goals_count: goalData.goals_count - 1,
                [dateOrSphere]: goalData[dateOrSphere].filter((item) => item?.id !== goal?.data.id),
            });
        });
        close();
    }, [close, dateOrSphere, goal?.data.id, goalData, setGoalData]);

    const doneGoal = useCallback(() => {
        patchData(`goals/${goal?.data.id}/`, { done: true }).then((res) => {
            setGoalData({
                ...goalData,
                goals_done_count: goalData.goals_done_count + 1,
                [dateOrSphere]: goalData[dateOrSphere]?.map((item) =>
                    item?.id === goal?.data.id ? res.data : item,
                ),
            });
        });
        close();
    }, [close, dateOrSphere, goal?.data.id, goalData, setGoalData]);

    const unDoneGoal = useCallback(() => {
        patchData(`goals/${goal?.data.id}/`, { done: false }).then((res) => {
            setGoalData({
                ...goalData,
                goals_done_count: goalData.goals_done_count - 1,
                [dateOrSphere]: goalData[dateOrSphere]?.map((item) =>
                    item?.id === goal?.data.id ? res.data : item,
                ),
            });
        });
        close();
    }, [close, dateOrSphere, goal?.data.id, goalData, setGoalData]);

    const setEditCheckbox = useCallback(
        (mission, e) => {
            setCheckboxData(
                checkboxData?.map((item) =>
                    item?.key === mission.key ? { ...mission, text: e.target.value } : item,
                ),
            );
        },
        [checkboxData],
    );

    const setFavouritePatch = useCallback(() => {
        patchData(`goals/${goal?.data.id}/`, { favorite: !isFavourite }).then((res) => {
            setGoalData({
                ...goalData,
                [dateOrSphere]: goalData[dateOrSphere]?.map((item) =>
                    item?.id === res.data.id ? res.data : item,
                ),
            });
        });
        setIsFavourite(!isFavourite);
    }, [isFavourite, goal, goalData, setGoalData, dateOrSphere]);

    const setDeleteCheckbox = useCallback(
        (mission) => {
            setCheckboxData(checkboxData?.filter((item) => item?.key !== mission.key));
        },
        [setCheckboxData, checkboxData],
    );

    const setGoal = useCallback(
        (e) => {
            setGoalName(e.target.value);
        },
        [setGoalName],
    );

    const setDescription = useCallback(
        (e) => {
            setDescriptionContent(e.target.value);
        },
        [setDescriptionContent],
    );

    const setCommentary = useCallback(
        (e) => {
            setCommentaryContent(e.target.value);
        },
        [setCommentaryContent],
    );

    const setDate = useCallback(
        (e) => {
            setDateValue(e.target.value);
        },
        [setDateValue],
    );

    const setFavourite = useCallback(() => {
        setIsFavourite(!isFavourite);
    }, [setIsFavourite, isFavourite]);

    const sphereOnChange = useCallback(
        (e) => {
            setSphere(e?.target?.value);
        },
        [setSphere],
    );

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const uploadFile = useCallback(
        (e) => {
            setImage(e?.target?.files[0]);
        },
        [setImage],
    );

    console.log(sphereValueTime);

    const createGoal = () => {
        const formData = new FormData();

        formData.append('image', image);
        formData.append('description', descriptionContent);
        formData.append('text', goalName);
        formData.append('date', dateValue);
        formData.append('comment', commentaryContent);
        formData.append('sphere', sphere);
        formData.append('favorite', isFavourite);

        postData(formData, 'goals/').then((res) => {
            setGoalData({
                ...goalData,
                goals_count: goalData.goals_count + 1,
                [sphereValueTime ?? sphere]: [...goalData[sphereValueTime ?? sphere], res.data],
            });
            // let checkboxesData = [];
            // Promise.all(
            //     checkboxData?.map((item) => {
            //         if (!!item.text) {
            //             return postData(
            //                 { name: item.text, goal: res.data.id },
            //                 `goals/${res.data.id}/checkboxes/`,
            //             ).then((res) => {
            //                 checkboxesData = [...checkboxesData, res.data];
            //             });
            //         }
            //         return null;
            //     }),
            // ).then(() =>
            //     setGoalData({
            //         ...goalData,
            //         [sphere]: goalData[sphere].map((item) => {
            //             if (item?.id === res.data.id) {
            //                 return {
            //                     ...item,
            //                     checkboxes: checkboxesData,
            //                 };
            //             } else return item;
            //         }),
            //     }),
            // );
        });
        close();
    };
    return (
        <>
            <div
                ref={ref}
                className={cn({
                    'goal__modal': true,
                    'goal__modal-edit': read,
                })}
            >
                <GoalModalContext.Provider
                    value={{
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
                        setFavouritePatch,
                        canAddToFavorite,
                    }}
                >
                    {create && <GoalForm submitButtonContent="Создать" submit={createGoal} />}
                    {readMode && (
                        <GoalRead
                            deleteGoal={deleteGoal}
                            editModeChange={editModeChange}
                            formattedDate={formattedDate}
                            doneGoal={doneGoal}
                            goalDone={goal?.data.done}
                            unDoneGoal={unDoneGoal}
                        />
                    )}
                    {edit && (
                        <GoalForm edit={edit} submitButtonContent="Сохранить" submit={editGoal} />
                    )}
                </GoalModalContext.Provider>
            </div>
            <Overlay />
        </>
    );
};

const GoalModalContext = createContext(GoalModalContextState);

export function useGoalModalContext() {
    return useContext(GoalModalContext);
}
export default memo(GoalModal);
