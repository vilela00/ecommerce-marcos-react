import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import DetalheProduto from "../pages/ItemDetailContainer";
import Home from '../pages/Home'
import Footer from '../components/Footer'
// import ListaProdutos from "../pages/ItemListContainer";
import Checkout from "../pages/Checkout";
import Categoria from "../pages/Categoria";

function Router () {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route exact path = '/' element = {<Home />} />
                <Route exact path = '/produto/:produtoId' element = {<DetalheProduto />} />
                <Route exact path = '/categoria/:categoriaId' element = {<Categoria />} />
                <Route exact path = '/checkout/' element = {<Checkout />} />
            </Routes>

            <Footer />
           
        </div>
    )
}

export default Router