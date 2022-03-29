import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import AnnonceService from "../services/AnnonceService";
import Annonce from "./Annonce";

const AnnonceList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(true);
    const [annonces, setAnnonces] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await AnnonceService.getAnnonces();
                setAnnonces(response.data);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteAnnonce = (e, id) => {
        e.preventDefault();
        AnnonceService.deleteAnnonce(id)
            .then((res) => {
                if (annonces) {
                    setAnnonces((prevElement) => {
                        return prevElement.filter((annonce) => annonce.id !== id);
                    });
                }
            });
    };

    return (
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/addAnnonce")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Ajouter une annonce
                </button>
            </div>
            {!loading && (
                <div className="flex shadow border-b">
                    {annonces.map((annonce) => (
                        <Annonce annonce={annonce} deleteAnnonce={deleteAnnonce} key={annonce.id}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AnnonceList;
