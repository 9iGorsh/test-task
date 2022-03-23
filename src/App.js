import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ItemPage from "./pages/ItemPage";
import './styles/styles.scss';

const App=() =>(
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/archive/:id" element={<ItemPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default App