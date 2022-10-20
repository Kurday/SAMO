import { useQuery } from 'react-query';

import { getData } from 'service';

const placeholderData = {
    user: {
        username: '',
        user_image: '',
    },
};

export const useUserQuery = () => {
    return useQuery(['user'], () => getData('user/').then((res) => res.data), {
        placeholderData,
        staleTime: 90 * 60 * 1000,
    });
};
