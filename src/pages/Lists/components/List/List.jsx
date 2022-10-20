import { useCallback, useMemo, useState } from 'react';

import { PlusIcon } from 'assets/icons';
import { useListItemUpdateMutation, useListsQuery } from '../../api';
import { ItemModal } from '../ItemModal';
import { Checkbox } from '../Checkbox';
import { FavButton } from '../FavButton';
import { Progress } from '../Progress';

import styles from './styles.module.scss';

export const List = ({ kind, title }) => {
    const listQuery = useListsQuery({ kind });
    const [toggleShow, setToggleShow] = useState(true);
    const [currentId, setCurrentId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = useCallback(() => {
        setModalOpen(false);
        setCurrentId(null);
    }, []);
    const updateMutation = useListItemUpdateMutation();

    const data = listQuery.data;
    const [done, undone] = useMemo(() => {
        return (data ?? []).reduce(
            (acc, item) => {
                if (item.done) {
                    acc[0].push(item);
                } else {
                    acc[1].push(item);
                }
                return acc;
            },
            [[], []],
        );
    }, [data]);
    const current = toggleShow ? undone : done;

    return (
        <>
            <div className={styles.root}>
                <div>
                    <div className={styles.headerWrapper}>
                        <h2 className={styles.header}>{title}</h2>
                        <button type="button" onClick={() => setModalOpen(true)}>
                            <PlusIcon />
                        </button>
                    </div>

                    <Progress className={styles.progress} value={done.length} max={data?.length} />

                    <div className={styles.listItems}>
                        {current.map((item) => {
                            return (
                                <div key={item.id} className={styles.item}>
                                    <Checkbox
                                        className={styles.checkbox}
                                        label={item.title}
                                        checked={item.done}
                                        onChange={() => {
                                            updateMutation.mutate({
                                                kind,
                                                id: item.id,
                                                done: !item.done,
                                            });
                                        }}
                                        onLabelClick={() => {
                                            setCurrentId(item.id);
                                            setModalOpen(true);
                                        }}
                                    />
                                    <FavButton
                                        className={styles.itemFavoriteButton}
                                        checked={item.favorite}
                                        onClick={() => {
                                            updateMutation.mutate({
                                                kind,
                                                id: item.id,
                                                favorite: !item.favorite,
                                            });
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.listFooter}>
                    <button
                        className={styles.toggleButton}
                        type="button"
                        onClick={() => setToggleShow(!toggleShow)}
                    >
                        {toggleShow ? 'Показать завершенные' : 'Показать невыполненные'}
                    </button>
                </div>
            </div>
            <ItemModal
                key={currentId}
                id={currentId}
                kind={kind}
                open={modalOpen}
                onClose={closeModal}
            />
        </>
    );
};
