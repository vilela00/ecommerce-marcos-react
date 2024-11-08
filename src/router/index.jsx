import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import DetalheProduto from "../pages/ItemDetailContainer";
import Home from '../pages/Home'
import Footer from '../components/Footer'
import ListaProdutos from "../pages/ItemListContainer";

function Router () {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route exact path = '/' element = {<Home />} />
                <Route exact path = '/produto/:id' element = {<DetalheProduto />} />
                <Route exact path = '/categoria/:id' element = {<ListaProdutos />} />
            </Routes>

            <Footer />
           
        </div>
    )
}

export default Router