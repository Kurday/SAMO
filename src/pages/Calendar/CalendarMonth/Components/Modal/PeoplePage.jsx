import { useMemo } from 'react';
import { nanoid } from 'nanoid';

// const PeoplePage = () => {
const useNanoid = () => {
    useMemo(() => nanoid(), []);
};
export default useNanoid;
