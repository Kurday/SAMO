import { useState, useRef } from 'react';

import {
    useValuesCreateMutation,
    useValuesDeleteMutation,
    useValuesQuery,
    useValuesUpdateMutation,
} from './hooks';
import { CloseIcon, PlusIcon, TrashIcon } from 'assets/icons';

const ValuesModal = ({ onClose }) => {
    const inputRef = useRef();
    const valuesQuery = useValuesQuery();
    const createValueMutation = useValuesCreateMutation();
    const updateValueMutation = useValuesUpdateMutation();
    const deleteValueMutation = useValuesDeleteMutation();
    const [text, setText] = useState('');

    return (
        <div className="modal-wrap">
            <div className="block-values modal_window">
                <div className="values-head">
                    <h2>Ценности</h2>
                    <button onClick={onClose} className="edit">
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-list">
                    {!!valuesQuery?.data?.length &&
                        valuesQuery?.data?.map((value) => (
                            <div className="modal-list__item">
                                <span
                                    key={value.id}
                                    onBlur={(event) => {
                                        const title = event.currentTarget.value;
                                        if (!title) {
                                            deleteValueMutation.mutate({ id: value.id });
                                        } else {
                                            updateValueMutation.mutate({ id: value.id, title });
                                        }
                                    }}
                                    contentEditable="true"
                                >
                                    {value.title}
                                </span>
                                <button
                                    onClick={() => deleteValueMutation.mutate({ id: value.id })}
                                >
                                    <TrashIcon />
                                </button>
                            </div>
                        ))}
                </div>
                <form
                    className="add-task"
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (createValueMutation.isLoading || !text) {
                            return;
                        }

                        createValueMutation.mutate(
                            {
                                title: text,
                            },
                            {
                                onSuccess: () => {
                                    setText('');
                                    inputRef.current && inputRef.current.focus();
                                },
                            },
                        );
                    }}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Введите название здесь"
                        disabled={createValueMutation.isLoading}
                    />
                    <button type="submit" disabled={createValueMutation.isLoading}>
                        <PlusIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ValuesModal;
