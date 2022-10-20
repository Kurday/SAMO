import { useState, useCallback, memo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CloseIcon, PlusCircleIcon, PlusIcon, TrashIcon } from 'assets/icons';

import { deleteData, patchData, postData, getData } from '../../service';

const Modal = memo(({ business, onCloseClick }) => {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const handleText = useCallback((e) => setText(e.target.value), []);
    const createBusinessMutation = useMutation(
        ({ title }) => {
            return postData({ title }, `values/algorithm_business/`);
        },
        {
            onSuccess() {
                setText('');

                queryClient.invalidateQueries(['values', 'algorithm_business']);
            },
        },
    );

    const updateBusinessMutation = useMutation(
        ({ id, title }) => {
            return patchData(`values/algorithm_business/${id}/`, { title });
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'algorithm_business']);
            },
        },
    );

    const removeBusinessMutation = useMutation(
        ({ id }) => {
            return deleteData(`values/algorithm_business/${id}`);
        },
        {
            onSuccess() {
                queryClient.invalidateQueries(['values', 'algorithm_business']);
            },
        },
    );

    return (
        <div className="modal-wrap">
            <div className="block-business modal_window">
                <div className="business-head">
                    <h3>Бизнес</h3>
                </div>
                <div className="algorithms-content-block">
                    <div className="content" id="content-business">
                        {business.map(({ id, title }) => {
                            return (
                                <div key={id} className="notes">
                                    <span
                                        onBlur={(event) => {
                                            const title = event.currentTarget.textContent;
                                            if (!title) return;
                                            updateBusinessMutation.mutate({ id, title });
                                        }}
                                        contentEditable="true"
                                    >
                                        {title}
                                    </span>
                                    <button
                                        onClick={() => {
                                            removeBusinessMutation.mutate({ id });
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
                                value={text}
                                onChange={handleText}
                                placeholder="Введите название здесь"
                            />
                            <button
                                onClick={() => {
                                    if (!text) return;
                                    createBusinessMutation.mutate({
                                        title: text,
                                    });
                                }}
                            >
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                    <div className="add-values-item">
                        <button onClick={onCloseClick} className="edit">
                            <CloseIcon width={25} height={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

const Business = () => {
    const [showItem, setShowItem] = useState(false);
    const businessQuery = useQuery(['values', 'algorithm_business'], () => {
        return getData('values/algorithm_business/').then((res) => res.data);
    });
    const business = businessQuery.data;

    const handleShow = () => (showItem ? setShowItem(false) : setShowItem(true));

    return (
        <div className="block-business">
            <div className="business-head">
                <h3>Бизнес</h3>
                <div className="algorithms-content-block">
                    <div className="content" id="content-business">
                        {!!business?.length &&
                            business.map(({ id, title }, i) => {
                                return (
                                    <div key={id} className="notes">
                                        <span contentEditable="true">
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
                        {showItem ? <Modal business={business} onCloseClick={handleShow} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
