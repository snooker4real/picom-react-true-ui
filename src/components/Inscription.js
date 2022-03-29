import React from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../services/AuthService";

const Inscription = () => {

    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
        role: []
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const saveUser = (e) => {
        e.preventDefault();
        AuthService.saveUser(user)
            .then((response) => {
                console.log(response);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const navigate = useNavigate();

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Nom d'utilisateur
                    </label>
                    <input type="text"
                           name="username"
                           value={user.username}
                           onChange={(e) => handleChange(e)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                           id="username"
                           placeholder="Username"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input type="text"
                           name="email"
                           value={user.email}
                           onChange={(e) => handleChange(e)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                           id="email"
                           placeholder="Email"></input>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password1" placeholder="******************"></input>
                    <p className="text-red text-xs italic">Choisissez un mot de passe svp!</p>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Confirmer le mot de passe
                    </label>
                    <input
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password2" type="password" placeholder="******************"></input>
                </div>

                <div className="flex items-center justify-center">

                    <button onClick={saveUser}
                            className="bg-blue hover:bg-blue-dark text-blue-700 font-bold py-2 px-4 rounded"
                            type="button">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inscription;
