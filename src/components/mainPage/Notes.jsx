import React from 'react';
import { PlusIcon } from 'assets/icons';
import { BurgerIcon } from 'assets/icons';

const Notes = () => {
    return (
        <div className="notes-block">
            <div className="head-notes">
                <h2>26 мая 2021</h2>
                <div className="icons-notes">
                    <PlusIcon />
                    <BurgerIcon />
                </div>
            </div>
            <span style={{ marginLeft: '21px', color: '#25315B' }}>Понедельник</span>
            <div className="notes-container">
                <div className="time-block">
                    <div className="time">
                        <span>8:00</span>
                    </div>
                    <div className="time">
                        <span>9:00</span>
                    </div>
                    <div className="time">
                        <span>10:00</span>
                    </div>
                    <div className="time">
                        <span>11:00</span>
                    </div>
                    <div className="time">
                        <span>12:00</span>
                    </div>
                    <div className="time">
                        <span>13:00</span>
                    </div>
                    <div className="time">
                        <span>14:00</span>
                    </div>
                    <div className="time">
                        <span>15:00</span>
                    </div>
                    <div className="time">
                        <span>16:00</span>
                    </div>
                    <div className="time">
                        <span>17:00</span>
                    </div>
                </div>
                <div className="events-block">
                    <div className="events-one">
                        <span>Утренние ритуалы</span>
                    </div>
                    <div className="events-two">
                        <span>Разобраться с финансами</span>
                    </div>
                    <div className="events-three">
                        <span>Важная встреча с инвесторами</span>
                    </div>
                    <div className="events-four"></div>
                    <div className="events-five">
                        <span>Свидание с Машей</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Notes;
