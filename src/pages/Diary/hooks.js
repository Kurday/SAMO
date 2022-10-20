import { getData, patchData } from 'service/index';
import { useQuery, useMutation } from 'react-query';

export const useRitualQuery = () => {
    return useQuery(
        ['values', 'values'],
        () => getData('values/values').then((res) => res.data),
        {},
    );
};

export const useFocusDayUpdateMutation = () => {
    return useMutation(
        ({ id, content }) => patchData(`/diary/focusday/detail/${id}`, { content }),
        {
            onSuccess: (res) => {
                console.log(res);
            },
            onError: (error) => {
                console.log(error);
            },
            retry: 0,
        },
    );
};
