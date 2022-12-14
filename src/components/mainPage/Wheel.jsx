import React from 'react';

const Wheel = () => {
    return (
        <div className="diagram-block">
            <div className="diagram-nav-menu">
                <span className="active-nav-menu">Действие</span>
                <span className="nav-menu">Состояние</span>
                <span className="nav-menu">Динамика</span>
            </div>
            <div className="diagram">
                <svg
                    width="310px"
                    height="310px"
                    width="310"
                    height="308"
                    viewBox="0 0 310 308"
                    fill="none"
                >
                    {/* <!-- личный рост --> */}
                    <g id="personal_growth">
                        <g
                            className="personal_grown_level"
                            id="personal_growth_level1"
                            transform="translate(166.98, 127.39)"
                            opacity="0.2"
                        >
                            <path
                                x="100px"
                                d="M0.97998 17.96L18.55 0.389984C24.5748 7.06577 28.1075 15.6185 28.55 24.6H3.70001C3.37717 22.1902 2.44053 19.9037 0.97998 17.96Z"
                                fill="#FBF682"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="personal_grown_level"
                            id="personal_growth_level2"
                            transform="translate(184.92, 105.75)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.919922 22.03L22.22 0.740021C33.9892 13.1624 40.7554 29.4941 41.22 46.6H11.0599C10.628 37.4827 7.04387 28.7982 0.919922 22.03Z"
                                fill="#FBF681"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="personal_grown_level"
                            id="personal_growth_level3"
                            transform="translate(206.58, 86.1)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.580078 20.38L19.8601 1.10001C36.8386 18.7325 46.5318 42.1265 47 66.6H19.76C19.2802 49.3563 12.4501 32.897 0.580078 20.38Z"
                                fill="#FBF681"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="personal_grown_level"
                            id="personal_growth_level4"
                            transform="translate(226.18, 70.17)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.180176 16.72L15.7402 1.17001C36.9389 23.0295 48.9989 52.1532 49.4602 82.6H27.4602C27.0022 57.9852 17.2578 34.4529 0.180176 16.72Z"
                                fill="#FBF681"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="personal_grown_level"
                            id="personal_growth_level5"
                            transform="translate(242.18, 56.19)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.180176 14.81L13.7701 1.18997C38.6831 26.7548 52.8329 60.9069 53.3002 96.6H34.0502C33.5855 66.0187 21.4719 36.7666 0.180176 14.81Z"
                                fill="#FBF681"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- семья и любовь --> */}
                    <g id="family">
                        <g
                            className="family_level"
                            id="family-level1"
                            transform="translate(157.5, 114.53)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.5 25.37V0.529999C9.4863 0.964545 18.0447 4.49816 24.72 10.53L7.17999 28.13C5.23095 26.6452 2.92865 25.6939 0.5 25.37Z"
                                fill="#B97EFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="family_level"
                            id="family-level2"
                            transform="translate(157.5, 83.87)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.5 31.03V0.869965C17.6185 1.33129 33.9637 8.09733 46.4 19.87L25.08 41.19C18.3097 35.0602 9.62238 31.4693 0.5 31.03Z"
                                fill="#B97EFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>

                        <g
                            className="family_level"
                            id="family-level3"
                            transform="translate(157.5, 56.11)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.529785 28.37V1.11002C25.0076 1.57179 48.407 11.2658 66.0398 28.25L46.7598 47.53C34.2371 35.665 17.7743 28.8419 0.529785 28.37Z"
                                fill="#B97EFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="family_level"
                            id="family-level4"
                            transform="translate(157.5, 33.6)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.5 22.6V0.600006C30.9544 1.06682 60.0827 13.138 81.94 34.35L66.39 49.9C48.6543 32.8178 25.1198 23.0668 0.5 22.6Z"
                                fill="#B97EFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="family_level"
                            id="family-level5"
                            transform="translate(157.5, 13.84)"
                            opacity="0.2"
                        >
                            <path
                                d="M0.5 0.839996C36.195 1.29808 70.3503 15.4492 95.91 40.37L82.32 53.99C60.3634 32.676 31.0969 20.5501 0.5 20.09V0.839996Z"
                                fill="#B97EFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- бизнес и работа --> */}
                    <g id="business">
                        <g
                            className="business_level"
                            id="business-level1"
                            transform="translate(129.3, 114.56)"
                            opacity="0.2"
                        >
                            <path
                                d="M18.8698 28.13L1.2998 10.56C7.97509 4.52813 16.5335 0.994514 25.5198 0.559967V25.41C23.1065 25.7312 20.8164 26.6679 18.8698 28.13Z"
                                fill="#64BDFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="business_level"
                            id="business-level2"
                            transform="translate(107.62, 83.88)"
                            opacity="0.2"
                        >
                            <path
                                d="M21.9501 41.2L0.620117 19.88C13.0563 8.10734 29.4017 1.3413 46.5201 0.879974V31.04C37.4016 31.4833 28.7187 35.0737 21.9501 41.2Z"
                                fill="#64BDFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="business_level"
                            id="business-level3"
                            transform="translate(88.01, 56.11)"
                            opacity="0.2"
                        >
                            <path
                                d="M20.2997 47.53L1.00977 28.25C18.6437 11.2675 42.0423 1.57376 66.5198 1.11002V28.37C49.2772 28.8369 32.8157 35.6608 20.2997 47.53Z"
                                fill="#64BDFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="business_level"
                            id="business-level4"
                            transform="translate(72.08, 33.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M16.6301 49.89L1.08008 34.34C22.9385 13.1298 52.0661 1.05882 82.5201 0.589996V22.59C57.8996 23.0539 34.364 32.8053 16.6301 49.89Z"
                                fill="#64BDFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="business_level"
                            id="business-level5"
                            transform="translate(58.18, 13.84)"
                            opacity="0.2"
                        >
                            <path
                                d="M14.7302 53.97L1.18018 40.35C26.7367 15.4454 60.8788 1.30242 96.5602 0.839996V20.09C65.9613 20.5362 36.689 32.6558 14.7302 53.97Z"
                                fill="#64BDFF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- здоровье и спорт --> */}
                    <g id="health">
                        <g
                            className="health_level"
                            id="health-level1"
                            transform="translate(116.45, 127.39)"
                            opacity="0.2"
                        >
                            <path
                                d="M28.0502 17.96C26.5722 19.8978 25.6213 22.1855 25.2902 24.6H0.450195C0.879645 15.6155 4.41409 7.05861 10.4502 0.389984L28.0502 17.96Z"
                                fill="#FFA876"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="health_level"
                            id="health-level2"
                            transform="translate(85.76, 105.74)"
                            opacity="0.2"
                        >
                            <path
                                d="M41.1198 22.03C34.9877 28.7958 31.3933 37.4797 30.9498 46.6H0.759766C1.229 29.4951 7.9946 13.165 19.7598 0.740021L41.1198 22.03Z"
                                fill="#FFA876"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="health_level"
                            id="health-level3"
                            transform="translate(58.02, 86.07)"
                            opacity="0.2"
                        >
                            <path
                                d="M47.45 20.38C35.5763 32.8955 28.7426 49.355 28.26 66.6H1.02002C1.48907 42.1139 11.1898 18.7086 28.18 1.06998L47.45 20.38Z"
                                fill="#FFA876"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="health_level"
                            id="health-level4"
                            transform="translate(35.52, 70.17)"
                            opacity="0.2"
                        >
                            <path
                                d="M49.81 16.72C32.7296 34.4519 22.9817 57.984 22.52 82.6H0.52002C0.9813 52.1532 13.0414 23.0295 34.24 1.17001L49.81 16.72Z"
                                fill="#FFA876"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="health_level"
                            id="health-level5"
                            transform="translate(15.77, 56.2)"
                            opacity="0.2"
                        >
                            <path
                                d="M53.89 14.81C32.594 36.7638 20.4797 66.0177 20.02 96.6H0.77002C1.23066 60.9085 15.3816 26.7571 40.3 1.19998L53.89 14.81Z"
                                fill="#FFA876"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- яркость жизни --> */}
                    <g id="life">
                        <g
                            className="life_level"
                            id="life_level1"
                            transform="translate(116.48, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M25.29 0.589996C25.619 3.00816 26.57 5.29956 28.05 7.24002L10.48 24.81C4.44388 18.1374 0.90961 9.5774 0.47998 0.589996H25.29Z"
                                fill="#69E4FF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="life_level"
                            id="life_level2"
                            transform="translate(85.8, 155.56)"
                            opacity="0.2"
                        >
                            <path
                                d="M41.1198 25.1599L19.7998 46.46C8.02556 34.0248 1.25926 17.6788 0.799805 0.559967H30.9598C31.393 9.68968 34.9843 18.3853 41.1198 25.1599Z"
                                fill="#69E4FF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="life_level"
                            id="life_level3"
                            transform="translate(58.04, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M28.2601 0.589996C28.7326 17.8441 35.5632 34.3153 47.4401 46.84L28.1801 66.13C11.1965 48.4847 1.50316 25.0764 1.04004 0.589996H28.2601Z"
                                fill="#69E4FF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="life_level"
                            id="life_level4"
                            transform="translate(35.52, 155.57)"
                            opacity="0.2"
                        >
                            <path
                                d="M22.52 0.589996C22.9872 25.2019 32.7344 48.7289 49.81 66.46L34.24 82.01C13.0399 60.1475 0.979772 31.02 0.52002 0.569977L22.52 0.589996Z"
                                fill="#69E4FF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="life_level"
                            id="life_level5"
                            transform="translate(15.77, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M20.02 0.589996C20.4737 31.1736 32.5888 60.4296 53.89 82.38L40.3 95.97C15.3855 70.4184 1.23475 36.2748 0.77002 0.589996H20.02Z"
                                fill="#69E4FF"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- друзья --> */}
                    <g id="friends">
                        <g
                            className="friends_level"
                            id="friends-level1"
                            transform="translate(129.03, 165.07)"
                            opacity="0.2"
                        >
                            <path
                                d="M18.8698 1.06998C20.8134 2.54282 23.1037 3.48994 25.5198 3.81998V28.6599C16.5333 28.2262 7.97464 24.6925 1.2998 18.6599L18.8698 1.06998Z"
                                fill="#FE6D6D"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="friends_level"
                            id="friends-level2"
                            transform="translate(107.65, 182.99)"
                            opacity="0.2"
                        >
                            <path
                                d="M21.95 0.990021C28.7148 7.12345 37.3992 10.718 46.52 11.1599V41.32C29.4115 40.8532 13.0774 34.0874 0.649902 22.32L21.95 0.990021Z"
                                fill="#FE6D6D"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="friends_level"
                            id="friends-level3"
                            transform="translate(87.98, 204.66)"
                            opacity="0.2"
                        >
                            <path
                                d="M20.27 0.659943C32.7925 12.5375 49.2666 19.3623 66.52 19.82V47.09C42.0336 46.6269 18.6253 36.9335 0.97998 19.95L20.27 0.659943Z"
                                fill="#FE6D6D"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="friends_level"
                            id="friends-level4"
                            transform="translate(72.08, 224.32)"
                            opacity="0.2"
                        >
                            <path
                                d="M16.6301 1.31998C34.3703 18.3912 57.9044 28.1313 82.5201 28.59V50.59C52.0689 50.1265 22.9416 38.0629 1.08008 16.86L16.6301 1.31998Z"
                                fill="#FE6D6D"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="friends_level"
                            id="friends-level5"
                            transform="translate(58.11, 240.24)"
                            opacity="0.2"
                        >
                            <path
                                d="M14.6999 1.24002C36.6628 22.5394 65.9285 34.6506 96.5199 35.1V54.36C60.8254 53.8999 26.6707 39.749 1.10986 14.83L14.6999 1.24002Z"
                                fill="#FE6D6D"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                    {/* <!-- инвестиции --> */}
                    <g id="investments">
                        <g
                            className="investments_level"
                            id="investments_level1"
                            transform="translate(157.5, 165.06)"
                            opacity="0.2"
                        >
                            <path
                                d="M7.17981 1.05997L24.7498 18.64C18.0713 24.6669 9.51481 28.1998 0.529785 28.64V3.79001C2.94509 3.46984 5.23624 2.52923 7.17981 1.05997Z"
                                fill="#81FFB3"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="investments_level"
                            id="investments_level2"
                            transform="translate(157.5, 182.99)"
                            opacity="0.2"
                        >
                            <path
                                d="M25.1099 0.990021L46.3998 22.31C33.9722 34.0774 17.6382 40.8432 0.529785 41.31V11.1599C9.65343 10.7178 18.341 7.12345 25.1099 0.990021Z"
                                fill="#81FFB3"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="investments_level"
                            id="investments_level3"
                            transform="translate(157.5, 204.66)"
                            opacity="0.2"
                        >
                            <path
                                d="M46.73 0.659943L66.04 19.95C48.3958 36.9352 24.9868 46.6288 0.5 47.09V19.82C17.7445 19.348 34.2074 12.5249 46.73 0.659943Z"
                                fill="#81FFB3"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="investments_level"
                            id="investments_level4"
                            transform="translate(157.5, 224.3)"
                            opacity="0.2"
                        >
                            <path
                                d="M66.39 0.299957L81.94 15.85C60.0855 37.0663 30.9554 49.1382 0.5 49.6V27.6C25.1207 27.1371 48.6565 17.3855 66.39 0.299957Z"
                                fill="#81FFB3"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="investments_level"
                            id="investments_level5"
                            transform="translate(157.5, 240.22)"
                            opacity="0.2"
                        >
                            <path
                                d="M82.3 1.22L95.91 14.82C70.3484 39.7392 36.1951 53.8931 0.5 54.36V35.1C31.087 34.6392 60.3447 22.5212 82.3 1.22Z"
                                fill="#81FFB3"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        {/* <!-- благотворительность --> */}
                    </g>
                    <g id="charity">
                        <g
                            className="charity_level"
                            id="charity_level1"
                            transform="translate(167.01, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M3.72974 0.589996H28.5798C28.1395 9.57502 24.6067 18.1316 18.5798 24.81L1.00977 7.24002C2.47189 5.29339 3.40855 3.00329 3.72974 0.589996Z"
                                fill="#FF71D8"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="charity_level"
                            id="charity_level2"
                            transform="translate(184.93, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M11.1002 0.589996H41.2601C40.8035 17.7095 34.0368 34.0564 22.2601 46.49L0.930176 25.1599C7.06717 18.3973 10.6624 9.71163 11.1002 0.589996Z"
                                fill="#FF71D8"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="charity_level"
                            id="charity_level3"
                            transform="translate(206.58, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M19.76 0.589996H47C46.5408 25.0772 36.847 48.4869 19.8601 66.13L0.580078 46.84C12.4569 34.3153 19.2875 17.8441 19.76 0.589996Z"
                                fill="#FF71D8"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="charity_level"
                            id="charity_level4"
                            transform="translate(226.23, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M28.4999 0.589996H50.4999C50.0401 31.04 37.98 60.1674 16.7799 82.0299L1.22998 66.46C18.3041 48.7297 28.045 25.2006 28.4999 0.589996Z"
                                fill="#FF71D8"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                        <g
                            className="charity_level"
                            id="charity_level5"
                            transform="translate(242.18, 155.59)"
                            opacity="0.2"
                        >
                            <path
                                d="M35.0001 0.589996H54.2601C53.7949 36.2835 39.6449 70.4364 14.7302 96L1.18018 82.46C22.4767 60.4783 34.5742 31.1932 35.0001 0.589996Z"
                                fill="#FF71D8"
                                stroke="white"
                                stroke-width="0.5"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Wheel;
