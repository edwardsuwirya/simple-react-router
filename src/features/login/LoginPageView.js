import {useNavigate} from 'react-router-dom';
import {useLocalStorage} from "../../utils/hook/useLocalStorage";

export default function LoginPageView() {
    const navigate = useNavigate();
    const [localStorageValue, setLocalStorageValue] = useLocalStorage('user', '');
    const onLogin = () => {
        setLocalStorageValue('test')
        navigate('/main');
    }
    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Login</h2>
            <button onClick={onLogin}>Login</button>
        </main>
    );
}
