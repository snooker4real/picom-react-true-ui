import React from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/AuthService";

const Login = () => {

    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const loginUser = (e) => {
        e.preventDefault();
        AuthService.loginUser(user)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navigate = useNavigate();
    // todo: login
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                           id="username"
                           name="username"
                           value={user.username}
                           onChange={(e) => handleChange(e)}
                           type="text" placeholder="Username"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password" type="password" placeholder="******************"></input>
                    <p className="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={loginUser}
                        className="bg-blue hover:bg-blue-dark text-green-700 font-bold py-2 px-4 rounded"
                        type="button">
                        Se connecter
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-blue-darker"
                       href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
