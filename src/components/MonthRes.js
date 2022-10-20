import { useEffect, useState } from 'react';
import PlanMonth from './month/PlanMonth';
import TargetNextMonth from './month/TargetNextMonth';
import TargetMonth from './month/TargetMonth';
import PlanNextMonth from './month/PlanNextMonth';
import Analytics from './month/Analytics';
import { getData } from '../service';
import DiaryMonth from './month/DiaryMonth';
import useRequest from 'hooks/useRequest';
import { MainHeader } from 'app/Layout';

export const MonthResult = () => {
    const [res, setRes] = useState([]);

    const request = () => getData('results/');

    const [data] = useRequest(request);

    useEffect(() => {
        setRes(data);
        return () => {
            setRes([]);
        };
    }, [data]);

    // month_diary: []
    // month_plan: [{…}]
    // month_target: [{…}]
    // next_month_plan: []
    // next_month_target: [{…}]
    // next_week_plan: []
    // next_week_target: []
    // week_diary: []
    // week_plan: [{…}]
    // week_target: [{…}]

    return (
        <>
            <MainHeader withNav title="Итоги" />
            <PlanMonth />
            <TargetNextMonth />
            <DiaryMonth />
            <TargetMonth />
            <PlanNextMonth />
            <Analytics />
        </>
    );
};
