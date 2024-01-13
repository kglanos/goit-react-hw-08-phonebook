import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleRegistration  = (e) => {
        e.preventDefault();
        const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(register({ name, email, password }));
    };

    return (
        <div>
            <form onSubmit={handleRegistration}>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="password">Password</label>
                <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;

