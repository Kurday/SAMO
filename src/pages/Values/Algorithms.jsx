import Business from './Business';
import Relationships from './Relationships';
import plusValuesIconUrl from '../../icons/plus_values.svg';

const Algorithms = () => {
    return (
        <div className="block-algorithms">
            <div className="algorithms-head">
                <h2>Алгоритмы</h2>
                <img src={plusValuesIconUrl} alt="edit" />
            </div>
            <div className="algorithms-content">
                <Business />
                <Relationships />
            </div>
        </div>
    );
};

export default Algorithms;
