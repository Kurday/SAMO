import useRequest from 'hooks/useRequest';
import React, { useEffect, useState } from 'react';
import Pencil from '../../icons/pencil.svg';
import { getData } from '../../service';

const DiaryWeek = () => {
    const [weekDiary, setWeekDiary] = useState([]);

    const request = () => getData('results/');

    const [res] = useRequest(request);

    useEffect(() => {
        setWeekDiary(res?.week_diary);
        return () => {
            setWeekDiary([]);
        };
    }, [res]);
    const diaryWeekItem = weekDiary?.map((item) => {
        return (
            <>
                <div className="diary_paragraph">
                    <h2>Вывод недели</h2> <p id="conclusion"> {item.conclusion} </p>
                </div>
                <div className="diary_paragraph">
                    <h2>Достижения недели</h2> <p id="conclusion"> {item.achievements} </p>
                </div>
                <div className="diary_paragraph">
                    <h2>Добрые дела</h2> <p id="conclusion">{item.good_things}</p>
                </div>
            </>
        );
    });

    return (
        <div className="block diary-month_block">
            <div className="headline_block">
                <h2> Дневник недели </h2>
                <img src={Pencil} alt="edit" className="edit" />
            </div>
            {diaryWeekItem}
        </div>
    );
};

export default DiaryWeek;
