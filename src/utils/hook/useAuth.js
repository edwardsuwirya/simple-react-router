import {useLocalStorage} from "./useLocalStorage";

export const useAuth = () => {
    const [storedValue, setValue] = useLocalStorage('user', '');
    if (storedValue) {
        return storedValue
    } else {
        return null
    }
};
