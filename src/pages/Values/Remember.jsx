import { CloseIcon, BigEditIcon, PlusIcon, TrashIcon } from 'assets/icons';
import { useState, useCallback, memo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { getData, postData, deleteData, patchData } from '../../service';

const Modal = memo(({ remember, onCloseClick }) => {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const handleText = useCallback((e) => setText(e.target.value), []);

    const createQuotesMutation = useMutation(
        ({ title }) => {
            return postData({ title }, `values/quotes/`);
        },
        {
            onSuccess() {
                setText('');
                queryClient.invalidateQueries(['values', 'quotes']);
            },
        },
    );

    const updateQuotesMutation = useMutation(
        ({ id, title }) => {
            return patchData(`values/quotes/${id}/`, { title });
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'quotes']);
            },
        },
    );

    const deleteQuotesMutation = useMutation(
        ({ id }) => {
            return deleteData(`values/quotes/${id}/`);
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'quotes']);
            },
        },
    );

    return (
        <div className="modal-wrap">
            <div className="block-remember modal_window">
                <div className="remember-head">
                    <h2>Помнить</h2>
                    <button onClick={onCloseClick} className="edit">
                        <CloseIcon />
                    </button>
                </div>

                <ul id="my-quotes">
                    {remember.map(({ id, title }) => {
                        return (
                            <li style={{ listStyleType: 'circle' }} key={id}>
                                <span
                                    onBlur={(event) => {
                                        const title = event.currentTarget.textContent;
                                        updateQuotesMutation.mutate({ id, title });
                                    }}
                                    contentEditable="true"
                                >
                                    {title}
                                </span>
                                <button onClick={() => deleteQuotesMutation.mutate({ id })}>
                                    <TrashIcon />
                                </button>
                            </li>
                        );
                    })}
                    <div className="add-task">
                        <input
                            type="text"
                            onChange={handleText}
                            value={text}
                            placeholder="Введите название напоминания"
                        />
                        <button
                            onClick={() => {
                                if (!text) return;
                                createQuotesMutation.mutate({ title: text });
                            }}
                        >
                            <PlusIcon />
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
});

const Remember = () => {
    const [showItem, setShowItem] = useState(false);
    const quotesQuery = useQuery(['values', 'quotes'], () => {
        return getData('values/quotes').then((res) => res.data);
    });
    const remember = quotesQuery.data;

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    if (quotesQuery.isError) {
        return (
            <div>
                <h4>Error</h4>
            </div>
        );
    }

    return (
        <div className="block-remember">
            <div className="remember-head">
                <h2>Помнить</h2>
                <button onClick={handleShow}>
                    <BigEditIcon />
                </button>
                {showItem ? <Modal remember={remember} onCloseClick={handleShow} /> : null}
            </div>
            <ul id="my-quotes">
                {!!remember?.length &&
                    remember.map(({ id, title }) => {
                        return (
                            <li key={id}>
                                <span>{title}</span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default Remember;
