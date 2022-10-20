import { useState } from 'react';

import pencilIconUrl from '../../icons/pencil.svg';
import { useValuesQuery } from './hooks';
import ValuesModal from './ValuesModal';

const Values = () => {
    const [showItem, setModalVisible] = useState(false);
    const valuesQuery = useValuesQuery();

    const { data } = valuesQuery;

    if (valuesQuery.isError) {
        return (
            <div>
                <h4>Error</h4>
            </div>
        );
    }

    return (
        <div className="block-values">
            <div className="values-head">
                <h2>Ценности</h2>
                <img onClick={() => setModalVisible(true)} src={pencilIconUrl} alt="edit" />
                {showItem ? (
                    <ValuesModal values={data?.values} onClose={() => setModalVisible(false)} />
                ) : null}
            </div>
            <div id="my-values">
                {!!data?.length &&
                    data?.map((value, i) => (
                        <span key={value.id}>
                            {i + 1}. {value.title}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default Values;
