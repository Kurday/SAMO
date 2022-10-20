import { NavLink } from 'react-router-dom';

const Diary = () => {
    return (
        <div className="diary-block">
            <NavLink to="/diary">
                <h2>Дневник</h2>
            </NavLink>

            <div className="diary-checkbox">
                <span style={{ marginRight: '30px' }}>Привычка 1</span>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="diary-checkbox">
                <span style={{ marginRight: '30px' }}>Привычка 1</span>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <span className="visually-hidden"></span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    );
};

export default Diary;
