export const dateTimeReducer = (state, update) => {
    const next = typeof update === 'function' ? update(state) : update;
    return state.equals(next) ? state : next;
};
