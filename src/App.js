import './App.css';
import Navbar from "./components/Navbar";
import AddAnnonce from "./components/AddAnnonce";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AnnonceList from "./components/AnnonceList";
import Accueil from "./components/Accueil";
import Inscription from "./components/Inscription";
import Login from "./components/Login";
import UpdateAnnonce from "./components/UpdateAnnonce";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route index element={<Accueil/>}/>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/registration" element={<Inscription/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/annonceList" element={<AnnonceList/>}/>
                    <Route path="/addAnnonce" element={<AddAnnonce/>}/>
                    <Route path="/editAnnonce/:id" element={<UpdateAnnonce/>}/>
                </Routes>
            </BrowserRouter>
            <script src="../path/to/flowbite/dist/flowbite.js"></script>

        </>
    );
}

export default App;
