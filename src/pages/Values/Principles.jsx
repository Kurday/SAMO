import { useState, useCallback, memo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CloseIcon, BigEditIcon, PlusIcon, TrashIcon } from 'assets/icons';

import { deleteData, patchData, postData, getData } from '../../service';

const Modal = memo(({ principles, onCloseClick }) => {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const handleText = useCallback((e) => setText(e.target.value), []);
    const createPrinciplesMutation = useMutation(
        ({ title }) => {
            return postData({ title }, `values/principles/`);
        },
        {
            onSuccess() {
                setText('');
                queryClient.invalidateQueries(['values', 'principles']);
            },
        },
    );

    const updatePrinciplesMutation = useMutation(
        ({ id, title }) => {
            return patchData(`values/principles/${id}/`, { title });
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'principles']);
            },
        },
    );

    const removePrinciplesMutation = useMutation(
        ({ id }) => {
            return deleteData(`values/principles/${id}`);
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'principles']);
            },
        },
    );

    return (
        <div className="modal-wrap">
            <div className="block-principles modal_window">
                <div className="values-head">
                    <h2>Принципы</h2>
                    <button onClick={onCloseClick} className="edit">
                        <CloseIcon />
                    </button>
                </div>

                <div className="modal-list">
                    {principles.map(({ id, title }) => (
                        <div className="modal-list__item">
                            <span
                                key={id}
                                onBlur={(event) => {
                                    const title = event.currentTarget.textContent;
                                    updatePrinciplesMutation.mutate({ id, title });
                                }}
                                contentEditable="true"
                            >
                                {title}
                            </span>
                            <button onClick={() => removePrinciplesMutation.mutate({ id })}>
                                <TrashIcon />
                            </button>
                        </div>
                    ))}
                    <div className="add-task">
                        <input
                            type="text"
                            onChange={handleText}
                            value={text}
                            placeholder="Введите название принципа"
                        />
                        <button
                            onClick={() => {
                                if (!text) return;
                                createPrinciplesMutation.mutate({ title: text });
                            }}
                        >
                            <PlusIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

const Principles = () => {
    const [showItem, setShowItem] = useState(false);
    const principlesQuery = useQuery(['values', 'principles'], () => {
        return getData('values/principles').then((res) => res.data);
    });
    const principles = principlesQuery.data;

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    if (principlesQuery.isError) {
        return (
            <div>
                <h4>Error</h4>
            </div>
        );
    }

    return (
        <div className="block-principles">
            <div className="values-head">
                <h2>Принципы</h2>
                <button onClick={handleShow}>
                    <BigEditIcon />
                </button>
                {showItem ? <Modal principles={principles} onCloseClick={handleShow} /> : null}
            </div>

            <div id="my-principles">
                {!!principles?.length &&
                    principles.map(({ id, title }, i) => {
                        return (
                            <span className="modal-list__item" key={id}>
                                {i + 1}. {title}
                            </span>
                        );
                    })}
            </div>
        </div>
    );
};
export default Principles;
