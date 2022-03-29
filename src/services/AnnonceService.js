import axios from "axios";

const ANNONCE_API_BASE_URL = "http://localhost:8080/api/v1/annonces";

class AnnonceService {

    getUserId() {
        return axios.get();
    }

    saveAnnonce(annonce, userId) {
        return axios.post(ANNONCE_API_BASE_URL + "/" + userId, annonce);
    }

    getAnnonces() {
        return axios.get(ANNONCE_API_BASE_URL);
    }

    deleteAnnonce(annonceId) {
        return axios.delete(ANNONCE_API_BASE_URL + "/" + annonceId);
    }

    getAnnonceById(id) {
        return axios.get(ANNONCE_API_BASE_URL + "/" + id);
    }

    updateAnnonce(annonce, id) {
        return axios.put(ANNONCE_API_BASE_URL + "/" + id, annonce);
    }
}

export default new AnnonceService();
