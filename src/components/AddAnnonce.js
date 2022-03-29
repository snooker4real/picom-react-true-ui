import React from "react";
import AnnonceService from "../services/AnnonceService";
import {useNavigate} from "react-router-dom";

const AddAnnonce = () => {

    function convert(str) {
        return str.split("T")[0];
    }

    const [annonce, setAnnonce] = React.useState({
        id: "",
        titre: "",
        description: "",
        image_url: "",
        date_debut: "",
        date_fin: ""
    });

    const [user, setUser] = React.useState({
        id : "",
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setAnnonce({...annonce, [e.target.name]: value});
    };

    const handleChangeUser = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    };

    const saveAnnonce = (e) => {
        e.preventDefault();
        AnnonceService.saveAnnonce(annonce, user.id)
            .then((response) => {
                console.log(response);
                navigate("/annonceList");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setAnnonce({
            id: "",
            titre: "",
            description: "",
            image_url: "",
            date_debut: "",
            date_fin: ""
        });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Créer une Annonce</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Titre</label>
                    <input type="text"
                           name="titre"
                           value={annonce.titre}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Description</label>
                    <input type="text"
                           name="description"
                           value={annonce.description}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">URL de l'image</label>
                    <input type="text"
                           name="image_url"
                           value={annonce.image_url}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Date de début</label>
                    <input type="date"
                           name="date_debut"
                           value={annonce.date_debut}
                           onChange={(e) => convert(e.target.name) | handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Date de Fin</label>
                    <input type="date"
                           name="date_fin"
                           value={annonce.date_fin}
                           onChange={(e) => convert(e.target.name) | handleChange(e)}
                           className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button onClick={saveAnnonce}
                            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">
                        Enregistrer
                    </button>

                    <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
                        Effacer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddAnnonce;
