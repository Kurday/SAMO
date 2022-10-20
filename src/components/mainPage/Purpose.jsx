import { NavLink } from 'react-router-dom';
import { useMainWrapperContext } from './MainWrapper';

const Purpose = () => {
    const { insight_of_the_day } = useMainWrapperContext();
    return (
        <div className="purpose-block">
            <NavLink to="/purpose">
                <h2>Цели</h2>
            </NavLink>
            <div className="purpose-checkbox">
                {
                    // purpose.targets.map(({title}, i) => {
                    //     return (
                    //         <div key={i} className="checkbox">
                    //             <label className="custom-checkbox">
                    //                 <input type="checkbox"/>
                    //                 <span>{title}</span>
                    //             </label>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    );
};
export default Purpose;
