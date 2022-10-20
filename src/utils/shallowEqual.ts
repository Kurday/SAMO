export const shallowEqual = (
    left: Record<string, unknown>,
    right: Record<string, unknown>,
): boolean => {
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);

    return (
        leftKeys.length === rightKeys.length &&
        leftKeys.every((key) => Object.is(left[key], right[key]))
    );
};
