import { useEffect, useReducer } from 'react';
import cn from 'classnames';

import { CloseIcon, TextIcon, TrashIcon } from 'assets/icons';
import {
    useListItemCreateMutation,
    useListItemDeleteMutation,
    useListItemQuery,
    useListItemUpdateMutation,
} from 'pages/Lists/api';

import { stateReducer } from 'utils/stateReducer';
import { FavButton } from '../FavButton';
import { Modal } from 'components/Modal';

import styles from './styles.module.scss';

const getDefaultValues = () => ({ title: '', description: '' });

export const ItemModal = ({ id, kind, open, onClose }) => {
    const itemQuery = useListItemQuery({ id, kind });
    const createItemMutation = useListItemCreateMutation();
    const updateItemMutation = useListItemUpdateMutation();
    const deleteItemMutation = useListItemDeleteMutation();

    const [values, setValues] = useReducer(stateReducer, undefined, getDefaultValues);

    useEffect(() => {
        if (!itemQuery.isSuccess) return;
        const { title, description } = itemQuery.data;
        setValues({ title, description });
    }, [itemQuery.data, itemQuery.isSuccess]);

    useEffect(() => {
        if (open) return;
        setValues(getDefaultValues);
    }, [open]);

    const handleTitleInputChange = (event) => {
        setValues({ title: event.target.value });
    };

    const handleDescriptionInputChange = (event) => {
        setValues({ description: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, description } = values;
        const opts = {
            onSuccess: () => {
                onClose();
            },
        };
        if (id) {
            updateItemMutation.mutate({ id, kind, title, description }, opts);
        } else {
            createItemMutation.mutate({ kind, title, description }, opts);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className={styles.root}>
                <div className={styles.modalControls}>
                    {id != null && (
                        <>
                            <FavButton
                                checked={itemQuery.data?.favorite}
                                onClick={() => {
                                    updateItemMutation.mutate({
                                        id,
                                        kind,
                                        favorite: !itemQuery.data.favorite,
                                    });
                                }}
                                disabled={updateItemMutation.isLoading || !itemQuery.isSuccess}
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    deleteItemMutation.mutate(
                                        { id, kind },
                                        {
                                            onSuccess() {
                                                onClose();
                                            },
                                        },
                                    );
                                }}
                            >
                                <TrashIcon />
                            </button>
                        </>
                    )}
                    <button className={cn(styles.close)} type="button" onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <form className={styles.content} onSubmit={handleSubmit}>
                    <div className={cn(styles.field, styles.fieldShort)}>
                        <input
                            className={cn(styles.input)}
                            onChange={handleTitleInputChange}
                            id="title"
                            type="text"
                            name="titleBook"
                            value={values.title}
                            placeholder="Введите название"
                        />
                    </div>

                    <div className={cn(styles.field, styles.fieldShort)}>
                        <div className={styles.icon}>
                            <TextIcon />
                        </div>
                        <textarea
                            className={styles.textarea}
                            onChange={handleDescriptionInputChange}
                            id="description"
                            type="text"
                            name="descriptionBook"
                            value={values.description}
                            placeholder="Добавить описание"
                        />
                    </div>
                    <div className={styles.modalFooter}>
                        <button type="submit" className="btn btn-primary">
                            {id == null ? 'Добавить' : 'Сохранить'}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
