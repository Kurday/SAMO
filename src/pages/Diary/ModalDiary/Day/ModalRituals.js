import React, { useEffect, useState, useRef } from 'react';
import './ModalDiary.scss';
import Plus from '../../../../icons/plus.svg';
import { deleteData, getData, patchData, postData } from 'service/index.js';
import { CloseIcon, RemoveIcon } from '../../../../assets/icons';
import cn from 'classnames';
import { memo } from 'react';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import useValuesQuery from '../../../../pages/Values/hooks/useValuesQuery';
import { useFocusDayUpdateMutation } from 'pages/Diary/hooks';

export const Rituals = memo((props) => {
    const inputRef = useRef();
    const queryClient = useQueryClient();
    const valuesQuery = useValuesQuery();
    const focusDayUpdateMutation = useFocusDayUpdateMutation();

    const [ritual, setRitual] = useState([]);
    useEffect(() => {
        getData('values/values').then((res) => res.data);
    }, []);

    const [inputValue, setInputValue] = useState('');

    const addRilual = () => {
        if (inputValue) {
            console.log('zzz');
            setRitual('');
            return;
        }
        alert('Введите что-то');
    };
    //     useMutation(
    //         ({ title }) => {
    //             return postData({ title }, `values/values/`);
    //         },
    //         {
    //             onSuccess() {
    //                 queryClient.invalidateQueries(['values', 'values']);
    //             },
    //         }
    //     );
    // };

    // const handleAddItem = () => {
    //     if (inputRef.current.value) {
    //         let newItem = {
    //             title: inputRef.current.value,
    //         };

    //         postData(newItem, `values/values/`).then((res) => {
    //             console.log(res);
    //             setRitual((prevState) => [
    //                 ...prevState,
    //                 {
    //                     id: res.id,
    //                     title: res.title,
    //                 },
    //             ]);
    //         });
    //     }
    // };

    const handleEditItem = (id, title) => {
        if (title) {
            let newItem = {
                title,
            };
            patchData(newItem, `values/values/${id}`).then((res) =>
                setRitual((ritual) => {
                    const index = ritual.findIndex((item) => item.id === id);
                    if (index >= 1) {
                        return [
                            ...ritual.slice(0, index),
                            { id, title },
                            ...ritual.slice(index + 1),
                        ];
                    }
                    return ritual;
                }),
            );
        }
    };

    const omRemove = (id) => {
        deleteData(`values/values/${id}`).then(() => {
            setRitual((prevState) => prevState.filter((item) => id !== item.id));
        });
    };

    const [focusText, setFocusText] = useState('');

    return (
        <div className={cn({ modal__wrapper: true, open: props.isOpened, close: !props.isOpened })}>
            <div className="modal__body">
                <div className="modal__close" onClick={props.onModalClose}>
                    <CloseIcon />
                    <div className="block__title">Утренние ритуалы</div>
                </div>
                <div className="wrap">
                    {Array.isArray(valuesQuery.data) &&
                        valuesQuery.data.map(({ id, title }, i) => (
                            <label className="container" key={id}>
                                <span className="visually-hidden"></span>
                                <input type="checkbox" />
                                <span key={id}>
                                    <input />
                                </span>
                                <img onClick={omRemove} src={RemoveIcon} alt="trash" />
                            </label>
                        ))}
                    <div className="add-contaner">
                        <label className="container">
                            <span className="visually-hidden"></span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <input
                            className="add-task"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            ref={inputRef}
                            placeholder="Добавить описание"
                        />
                        <img onClick={addRilual} src={Plus} alt="plus" />
                    </div>
                    <div className="block__title">Фокус дня</div>
                    <input
                        className="add-focus"
                        ref={inputRef}
                        value={focusText}
                        onChange={(e) => setFocusText(e.target.value)}
                    />
                </div>
                <button
                    className="modal__button"
                    onClick={() => {
                        focusDayUpdateMutation.mutate(
                            { id: 100, content: focusText },
                            {
                                onSuccess: (res) => {
                                    console.log(res);
                                },
                                onError: (error) => {
                                    alert(error);
                                },
                            },
                        );
                        console.log(focusText);
                    }}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
});
