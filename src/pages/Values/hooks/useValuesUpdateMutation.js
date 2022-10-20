import { useMutation, useQueryClient } from 'react-query';

import { patchData } from 'service';

const useValuesUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(({ id, title }) => patchData(`values/values/${id}/`, { title }), {
        onMutate: async ({ id, title }) => {
            await queryClient.cancelQueries(['values', 'values']);
            const prevData = queryClient.getQueriesData(['values', 'values']);
            const index = prevData.findIndex((item) => item.id === id);
            if (index >= 0) {
                const currentItem = prevData[index];
                const newData = [
                    ...prevData.slice(0, index),
                    { ...currentItem, id, title },
                    ...prevData.slice(index + 1),
                ];
                queryClient.setQueriesData(['values', 'values'], newData);
            }

            return { prevData };
        },
        onError: (error, variables, context) => {
            queryClient.setQueriesData(['values', 'values'], context.prevData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['values', 'values']);
        },
    });
};

export default useValuesUpdateMutation;
