import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getData, patchData, postData } from 'service';

const STALE_TIME = 60 * 1000;

export const useCalendarEventsQuery = () => {
    return useQuery(
        ['calendar', 'month'],
        () => getData('calendar/month/').then((res) => res.data),
        {
            staleTime: STALE_TIME,
            placeholderData: [],
        },
    );
};

export const useCalendarEventQuery = (eventId) => {
    const queryClient = useQueryClient();

    return useQuery(
        ['calendar', 'month', eventId],
        () => getData(`calendar/month/${eventId}`).then((res) => res.data),
        {
            enabled: !!eventId,
            initialData() {
                const events = queryClient.getQueriesData(['calendar', 'month']);
                if (!Array.isArray(events)) return;
                return events.find((event) => event.id === eventId);
            },
            staleTime: STALE_TIME,
        },
    );
};

export const useCreateCalendarEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((params) => postData(params, 'calendar/month/'), {
        onSuccess() {
            queryClient.invalidateQueries(['calendar', 'month']);
        },
    });
};

export const useUpdateCalendarEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((params) => patchData('calendar/month/', params), {
        onSuccess() {
            queryClient.invalidateQueries(['calendar', 'month']);
        },
    });
};
