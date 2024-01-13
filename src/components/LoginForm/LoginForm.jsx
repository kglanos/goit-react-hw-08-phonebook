import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        dispatch(login({ email: email.value, password: password.value }));
        email.value = "";
        password.value = "";
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
            />

            <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
