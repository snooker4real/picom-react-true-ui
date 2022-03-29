import React from "react";
import {useNavigate} from "react-router-dom";

const Accueil = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Accueil</h1>
            <div className="h-12">
                <button
                    onClick={() => navigate("/annonceList")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    List des annonces
                </button>
                <button
                    onClick={() => navigate("/addAnnonce")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Créer une annonces
                </button>

            </div>
        </div>
    );
};

export default Accueil;
