const Analytics = () => {
    return (
        <div className="block analytics">
            <div className="headline_block">
                <h2> Аналитика </h2>
            </div>
            <div className="analytics_body">
                <div className="analytics_paragraph">
                    <p> Вовлечённость </p> <span> 90 % </span>
                </div>
                <div className="analytics_paragraph">
                    <p> Привычек выполнено </p> <span> 33 % </span>
                </div>
                <div className="analytics_paragraph">
                    <p> Страниц книг прочитано </p> <span> 200 / 1000 </span>
                </div>
                <div className="analytics_paragraph">
                    <p> Фильмов просмотрено </p> <span> 1 </span>
                </div>
                <div className="analytics_paragraph">
                    <p> Самая прокаченная сфера </p>
                    <span className="blue_square"> </span>
                </div>
                <div className="analytics_paragraph">
                    <p> Сфера, на которую стоит обратить внимание </p>
                    <span className="red_square"> </span>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
