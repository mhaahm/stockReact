import {useEffect, useState} from "react";
import "./App.css";
import MenuStock from './components/Menu';
import Stock from './components/Stock'
import NoteHome from "./components/MyNotes/noteHome.jsx";
import Home from './Home'
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./error_page";
function App() {

    return (
        <>
            <MenuStock/>
            <div className="pt-5 mt-4">
              <Routes>
                  <Route path={'/stock'} element={<Stock/>} errorElement={<ErrorPage/>}></Route>
                  <Route path={'/myNote'} element={<NoteHome/>} errorElement={<ErrorPage/>}></Route>
                  <Route path={'/'} element={<Home/>} errorElement={<ErrorPage/>}></Route>
              </Routes>
            </div>
        </>);
}

export default App;
