import { useContext, useEffect, useState, createContext } from 'react';
import useRequest from 'hooks/useRequest';
import { getData } from 'service';

import Book from './Book';
import Diary from './Diary';
import Focus from './Focus';
import Insight from './Insight';
import Notes from './Notes';
import Purpose from './Purpose';
import ValueBlock from './ValuesBlock';
import Wheel from './Wheel';
import { MainHeader } from 'app/Layout';

const MainWrapperContextState = {
    books: [],
    calendar_of_the_day: [],
    focus_day: [],
    insight_of_the_day: [],
    sphere_preset: [],
    targets: [],
    values: [],
    week_tracker_habit: [],
};

const MainWrapperContext = createContext(MainWrapperContextState);

export function useMainWrapperContext() {
    return useContext(MainWrapperContext);
}

const MainWrapper = () => {
    const [data, setData] = useState([]);
    const request = () => getData('main_page/');

    const [result] = useRequest(request);

    useEffect(() => {
        setData(result);
        return () => {
            setData([]);
        };
    }, [result]);
    return (
        <>
            <MainHeader title="Колесо баланса" />
            <div className="main">
                <div className="main-content">
                    <MainWrapperContext.Provider value={{ ...data }}>
                        <Wheel />
                        <Focus />
                        <Diary />
                        <Book />
                        <ValueBlock />
                        <Purpose />
                        <Insight />
                        <Notes />
                    </MainWrapperContext.Provider>
                </div>
            </div>
        </>
    );
};

export default MainWrapper;
