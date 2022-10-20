import { useState, useCallback, memo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { deleteData, patchData, postData, getData } from '../../service';

import { CloseIcon, PlusCircleIcon, PlusIcon, TrashIcon } from 'assets/icons';

const Modal = memo(({ relationships, onCloseClick }) => {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const handleText = useCallback((e) => setText(e.target.value), []);
    const createRelationshipsMutation = useMutation(
        ({ title }) => {
            return postData({ title }, `values/algorithm_relationships/`);
        },
        {
            onSuccess() {
                setText('');
                queryClient.invalidateQueries(['values', 'algorithm_relationships']);
            },
        },
    );
    const updateRelationshipMutation = useMutation(
        ({ id, title }) => {
            return patchData(`values/algorithm_relationships/${id}/`, { title });
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'algorithm_relationships']);
            },
        },
    );
    const deleteRelationshipMutation = useMutation(
        ({ id }) => {
            return deleteData(`values/algorithm_relationships/${id}`);
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'algorithm_relationships']);
            },
        },
    );

    return (
        <div className="modal-wrap">
            <div className="block-relationships modal_window">
                <div className="business-head">
                    <h3>Отношения</h3>
                </div>
                <div className="relationships-content">
                    <div className="content" id="content-relationships">
                        {relationships.map(({ id, title }) => {
                            return (
                                <div className="notes" key={id}>
                                    <span
                                        id={id}
                                        onBlur={(event) => {
                                            updateRelationshipMutation.mutate({
                                                id,
                                                title: event.currentTarget.textContent,
                                            });
                                        }}
                                        contentEditable="true"
                                    >
                                        {title}
                                    </span>
                                    <button
                                        onClick={() => {
                                            deleteRelationshipMutation.mutate({ id });
                                        }}
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                            );
                        })}
                        <div className="add-task">
                            <input
                                type="text"
                                onChange={handleText}
                                value={text}
                                placeholder="Введите название здесь"
                            />

                            <button
                                onClick={() => {
                                    if (!text) return;
                                    createRelationshipsMutation.mutate({
                                        title: text,
                                    });
                                }}
                            >
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                    <div className="add-values-item">
                        <button onClick={onCloseClick} className="close">
                            <CloseIcon width={25} height={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

const Relationships = () => {
    const [showModal, setShowModal] = useState(false);
    const relationshipsQuery = useQuery(['values', 'algorithm_relationships'], () => {
        return getData('values/algorithm_relationships').then((res) => res.data);
    });
    const relationships = relationshipsQuery.data;

    const handleShow = () => (showModal ? setShowModal(false) : setShowModal(true));

    if (relationshipsQuery.isError) {
        return (
            <div>
                <h4>Error</h4>
            </div>
        );
    }

    return (
        <div className="block-relationships">
            <div className="business-head">
                <h3>Отношения</h3>
                <div className="relationships-content">
                    <div className="content" id="content-relationships">
                        {!!relationships?.length &&
                            relationships.map(({ id, title }, i) => {
                                return (
                                    <div key={id} className="notes">
                                        <span>
                                            {i + 1}. {title}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="add-values-item">
                        <button onClick={handleShow}>
                            <PlusCircleIcon />
                        </button>
                        {showModal ? (
                            <Modal relationships={relationships} onCloseClick={handleShow} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Relationships;
