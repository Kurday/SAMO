import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useMainWrapperContext } from './MainWrapper';

const ValueBlock = () => {
    const { values } = useMainWrapperContext();
    return (
        <div className="values-block">
            <h2>
                {' '}
                <NavLink to="/values">Ценности</NavLink>
            </h2>
            <div id="my-values">
                {/* {values.values.map(({title }, i) => {
                    return (
                        <span key={i}>{i + 1}. {title}</span>
                    );
                })} */}
            </div>
        </div>
    );
};

export default memo(ValueBlock);
