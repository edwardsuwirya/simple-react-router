import {useAuth} from "../../utils/hook/useAuth";

export default function LoginPageView() {
    const {login} = useAuth();
    const onLogin = () => login('doni');

    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Login</h2>
            <button onClick={onLogin}>Login</button>
        </main>
    );
}
