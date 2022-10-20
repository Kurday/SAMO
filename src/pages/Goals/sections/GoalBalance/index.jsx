import { memo, useCallback } from 'react';
import { sphereDataOption } from 'config/constants';
import { PlusCircleIcon } from 'assets/icons';
import { GoalItem } from '..';
import { sphereColor } from 'utils/colors';

const GoalTime = (props) => {
    const { openModal, data, openModalEdit } = props;
    const onClickSphere = useCallback((spher) => openModal(spher), [openModal]);

    return (
        <div className="goal__section">
            {sphereDataOption?.map((item) => (
                <div key={item?.value} className="goal__section-item">
                    <h3>{item.title}</h3>
                    {!!data &&
                        data[item.value]
                            ?.sort((a, b) => (a.favorite > b.favorite ? -1 : 1))
                            .map((goal) => (
                                <GoalItem
                                    key={goal?.id}
                                    openModalEdit={openModalEdit}
                                    bg={sphereColor(item.value).bg}
                                    color={sphereColor(item.value).color}
                                    goal={goal}
                                />
                            ))}
                    <button onClick={() => onClickSphere(item?.value)}>
                        <PlusCircleIcon />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default memo(GoalTime);
