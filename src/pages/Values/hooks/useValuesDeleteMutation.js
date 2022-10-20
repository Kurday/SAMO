import { useMutation, useQueryClient } from 'react-query';

import { deleteData } from 'service';

const useValuesDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(({ id }) => deleteData(`values/values/${id}/`), {
        onMutate: async ({ id }) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries(['values', 'values']);

            // Snapshot the previous value
            const prevData = queryClient.getQueryData(['values', 'values']);

            // Optimistically update to the new value
            queryClient.setQueryData(
                ['values', 'values'],
                prevData.filter((item) => item.id !== id),
            );

            // Return a context with the previous
            return { prevData };
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(['values', 'values'], context.prevData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['values', 'values']);
        },
    });
};

export default useValuesDeleteMutation;
