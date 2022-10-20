import { shallowEqual } from './shallowEqual';

export const stateReducer = <S extends Record<string, unknown>>(
    state: S,
    update: Partial<S> | ((state: S) => Partial<S>),
): S => {
    const newState =
        typeof update === 'function' ? { ...state, ...update(state) } : { ...state, ...update };

    return shallowEqual(state, newState) ? state : newState;
};
