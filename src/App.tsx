import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Authorization} from "./components/Main/Authorization/Authorization";
import {Registration} from "./components/Main/Registration/Registration";
import {Profile} from "./components/Main/Profile/Profile";
import {PageNotFound} from "./components/Main/PageNotFound/PageNotFound";
import {RecoveryPassword} from "./components/Main/RecoveryPassword/RecoveryPassword";
import {NewPassword} from "./components/Main/NewPassword/NewPassword";
import {Route, Routes} from "react-router-dom";
import {CardPacks} from "./components/Main/CardPacks/CardPacks";
import {Cards} from "./components/Main/Cards/Cards";

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <Routes>
                    <Route path={'*'} element={<PageNotFound/>}></Route>
                    <Route path={'/auth'} element={<Authorization/>}></Route>
                    <Route path={'/signup'} element={<Registration/>}></Route>
                    <Route path={'/'} element={<Profile/>}></Route>
                    <Route path={'/password-recovery'} element={<RecoveryPassword/>}></Route>
                    <Route path={'/new-password/:serverToken'} element={<NewPassword/>}></Route>
                    <Route path={'/cards'} element={<Cards/>}></Route>
                    <Route path={'/packs'} element={<CardPacks/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
