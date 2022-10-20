import { useMutation, useQueryClient } from 'react-query';

import { postData } from 'service';

const useValuesCreateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(({ title }) => postData({ title }, 'values/values/'), {
        onSuccess() {
            queryClient.invalidateQueries(['values', 'values']);
        },
    });
};

export default useValuesCreateMutation;
