import Analytics from './Analytics';
import PlanNextWeek from './PlanNextWeek';
import PlanWeek from './PlanWeek';
import TargetNextWeek from './TargetNextWeek';
import TargetWeek from './TargetWeek';
import DiaryWeek from './DiaryWeek';
import { MainHeader } from '../../app/Layout';

import './results.scss';

export const WeekResult = () => {
    // const [res, setRes] = useState([]);

    // useEffect(() => {
    //   getData(`results/`).then((result) => setRes(result));
    // }, []);

    return (
        <div className="results-page">
            <MainHeader withNav title="Итоги" />
            <PlanWeek />
            <TargetNextWeek />
            <DiaryWeek />
            <TargetWeek />
            <PlanNextWeek />
            <Analytics />
        </div>
    );
};
