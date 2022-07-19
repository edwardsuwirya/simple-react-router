import {useLocalStorage} from "./useLocalStorage";

export const useAuth = (test) => {
    const [storedValue, setValue] = useLocalStorage('user', test);
    if (storedValue) {
        return storedValue
    } else {
        return null
    }
};
