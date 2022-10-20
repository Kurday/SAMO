import { MainHeader } from 'app/Layout';
import { List } from './components/List';

import styles from './styles.module.scss';

export const Lists = () => {
    return (
        <>
            <MainHeader title="Список фильмов и книг" />
            <div className={styles.main}>
                <div className={styles.content}>
                    <List kind="books" title="Книги" />
                    <List kind="films" title="Фильмы" />
                    <List kind="travels" title="Путешествия" />
                    <List kind="wishes" title="Желания" />
                </div>
            </div>
        </>
    );
};
