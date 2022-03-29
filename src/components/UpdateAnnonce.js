import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import AnnonceService from "../services/AnnonceService";

const UpdateAnnonce = () => {

    function convert(str) {
        return str.split("T")[0];
    }

    const {id} = useParams();
    const navigate = useNavigate();
    const [annonce, setAnnonce] = useState({
        id: id,
        titre: "",
        description: "",
        image_url: "",
        date_debut: "",
        date_fin: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setAnnonce({...annonce, [e.target.name]: value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AnnonceService.getEmployeeById(annonce.id);
                setAnnonce(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    const updateAnnonce = (e) => {
        e.preventDefault();
        console.log(annonce);
        AnnonceService.updateAnnonce(annonce,id)
            .then((response) => {
                navigate("/annonceList");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Modifier une Annonce</h1>
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
                    <button onClick={updateAnnonce}
                            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700">
                        Modifier
                    </button>

                    <button
                        onClick={() => navigate("/annonceList")}
                        className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateAnnonce;
