import React from 'react';

import { MainHeader } from '../../app/Layout';

const Analytics = () => {
    return (
        <>
            <MainHeader title="Аналитика" />
            <main className="main">
                <section className="main__block">
                    <div className="chart">
                        <canvas id="myChart"></canvas>
                    </div>
                </section>
                <section className="main__block">
                    <div className="progress">
                        <h2>Прогресс</h2>
                        <p>Задач выполнено 22/34</p>
                        <p>Медитаций сделано 5/7</p>
                        <p>Привычек выполнено 3/6</p>
                        <p>Непрерывный цикл 1</p>
                        <p>Книг прочитано 2/15</p>
                        <div className="chart">
                            <canvas id="myChart4"></canvas>
                        </div>
                    </div>
                </section>

                <section className="main__block">
                    <div className="chart-menu">
                        <a href="#" onclick="update_chart_2('day')" className="days">
                            Дни
                        </a>
                        <a href="#" onclick="update_chart_2('week')" className="weeks">
                            Недели
                        </a>
                        <a href="#" onclick="update_chart_2('month')" className="monts">
                            Месяцы
                        </a>
                    </div>
                    <div className="chart">
                        <canvas id="myChart2"></canvas>
                    </div>
                </section>

                <section className="main__block">
                    <div className="chart-menu">
                        <a href="#" className="days">
                            Дни
                        </a>
                        <a href="#" className="weeks">
                            Недели
                        </a>
                        <a href="#" className="monts">
                            Месяцы
                        </a>
                    </div>
                    <div className="chart">
                        <canvas id="myChart3"></canvas>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Analytics;
