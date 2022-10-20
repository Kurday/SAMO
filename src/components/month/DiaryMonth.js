import React from 'react';
import Pencil from '../../icons/pencil.svg';

const json = {
    monthDiary: [
        {
            id: 1,
            headline: 'Вывод недели',
            data: 'Неделя прошла не зря, понравилось высыпаться',
        },
        {
            id: 2,
            headline: 'Достижения недели',
            data: 'переборол ненависть к найму, прочитал книгу, написал пост в блог',
        },
        { id: 3, headline: 'Добрые дела', data: 'спас котёнка' },
    ],
};

const DiaryMonth = () => {
    const diaryMonthItem = json.monthDiary.map((item) => {
        return (
            <div className="diary_paragraph">
                <h2> {item.headline} </h2> <p id="conclusion"> {item.data} </p>
            </div>
        );
    });

    return (
        <div className="block diary-month_block">
            <div className="headline_block">
                <h2> Дневник месяца </h2>
                <img src={Pencil} alt="edit" className="edit" />
            </div>
            {diaryMonthItem}
        </div>
    );
};

export default DiaryMonth;
