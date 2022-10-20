import { memo, useCallback } from 'react';
import { dataDateOptions } from 'config/constants';
import { PlusCircleIcon } from 'assets/icons';
import { GoalItem } from '..';
import { sphereColor } from 'utils/colors';

const GoalTime = (props) => {
    const { openModal, data, openModalEdit } = props;
    const onClick = useCallback((timeSphere) => openModal('', timeSphere), [openModal]);
    return (
        <div className="goal__section">
            {dataDateOptions?.map((item) => (
                <div key={item?.value} className="goal__section-item">
                    <h3>{item?.title}</h3>
                    {!!data &&
                        data[item.value]
                            ?.sort((a, b) => (a.favorite > b.favorite ? -1 : 1))
                            .map((goal) => (
                                <GoalItem
                                    fromBalance={true}
                                    key={goal?.id}
                                    dateValue={item?.value}
                                    openModalEdit={openModalEdit}
                                    bg={sphereColor(goal.sphere.slug).bg}
                                    color={sphereColor(goal.sphere.slug).color}
                                    goal={goal}
                                />
                            ))}
                    <button onClick={() => onClick(item.value)}>
                        <PlusCircleIcon />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default memo(GoalTime);
