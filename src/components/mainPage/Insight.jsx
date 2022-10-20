import { useMainWrapperContext } from './MainWrapper';

const Insight = () => {
    const { insight_of_the_day } = useMainWrapperContext();

    return (
        <div className="insight-block">
            <div className="head-insight">
                <h2>Инсайт</h2>
            </div>
            <p id="text_insight">
                {
                    // insight.books.map(({title}) => {
                    //     return title;
                    // })
                }
            </p>
        </div>
    );
};
export default Insight;
