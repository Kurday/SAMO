import { useQuery } from 'react-query';
import axios from 'axios';

import { getData } from 'service';

const getValues = ({ signal } = {}) => {
    // https://react-query.tanstack.com/guides/query-cancellation#using-an-axios-version-less-than-v0220
    const source = axios.CancelToken.source();
    const promise = getData('values/values/', {
        cancelToken: source.token,
    }).then((res) => res.data);

    if (signal instanceof AbortSignal) {
        signal.addEventListener('abort', () => {
            source.cancel('values query was cancelled by React Query');
        });
    }

    return promise;
};

const placeholderData = [];

const useValuesQuery = (options) => {
    return useQuery(['values', 'values'], getValues, {
        placeholderData,
        ...options,
    });
};

export default useValuesQuery;
