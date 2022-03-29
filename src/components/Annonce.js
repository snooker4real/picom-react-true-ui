import React from "react";
import {useNavigate} from "react-router-dom";

const Annonce = ({annonce, deleteAnnonce}) => {

    const navigate = useNavigate();

    const editAnnonce = (e, id) => {
        e.preventDefault();
        navigate(`/editAnnonce/${id}`);
    }

    return (
        <div key={annonce.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4">

            <img className="rounded object-cover h-48 w-96" src={annonce.image_url} alt=""></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{annonce.titre}</div>
                <p className="text-gray-700 text-base">
                    {annonce.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Du {annonce.date_debut.split("T")[0]}</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Au {annonce.date_fin.split("T")[0]}</span>
            </div>
            <div className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a href="#" onClick={(e, id) => editAnnonce(e, annonce.id)}
                   className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Modifier</a>
                <a href="#" onClick={(e, id) => deleteAnnonce(e, annonce.id)}
                   className="text-red-600 hover:text-red-800 hover:cursor-pointer">Supprimer</a>

            </div>
        </div>
    )
};

export default Annonce;
