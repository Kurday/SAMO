import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteData, getData, patchData, postData } from 'service';

export const useListsQuery = ({ kind }) => {
    return useQuery(['lists', kind], () => getData(`/lists/${kind}/`).then((res) => res.data), {});
};

export const useListItemQuery = ({ id, kind }) => {
    const queryClient = useQueryClient();
    return useQuery(
        ['lists', kind, { id }],
        () => getData(`/lists/${kind}/${id}/`).then((res) => res.data),
        {
            enabled: !!id,
            initialData() {
                if (!id) return;
                const list = queryClient.getQueryData(['lists', kind]);
                const item = list?.find((item) => item.id === id);
                if (!item) return;
                return item;
            },
        },
    );
};

export const useListItemCreateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ kind, title, description }) =>
            postData({ title, description, done: false, favorite: false }, `/lists/${kind}/`),
        {
            onSuccess(_, { kind }) {
                return queryClient.invalidateQueries(['lists', kind]);
            },
        },
    );
};

export const useListItemUpdateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, kind, ...bodyParams }) => patchData(`/lists/${kind}/${id}/`, bodyParams),
        {
            onSuccess(_, { kind }) {
                return queryClient.invalidateQueries(['lists', kind]);
            },
        },
    );
};

export const useListItemDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(({ id, kind }) => deleteData(`/lists/${kind}/${id}/`), {
        onSuccess(_, { kind }) {
            queryClient.invalidateQueries(['lists', kind], { exact: true });
        },
    });
};
