import { NavLink } from 'react-router-dom';
import { useMainWrapperContext } from './MainWrapper';

const Book = () => {
    const { books } = useMainWrapperContext();
    if (!books) {
        return (
            <div>
                <h4>Loading</h4>
            </div>
        );
    }

    return (
        <div className="book-block">
            <div className="head-book">
                <NavLink to="/lists">
                    <h2>Книга</h2>
                </NavLink>
            </div>
            <div className="text-block">
                {
                    // books.books.map(({title}) => {
                    //     return (
                    //     <>
                    //         <p className="text-book" id="book_block">{title}</p>
                    //         <span style={{color: '#25315B', float: 'right'}}>прогресс, наверное</span>
                    //     </>
                    //     )
                    // })
                }
            </div>
        </div>
    );
};

export default Book;
