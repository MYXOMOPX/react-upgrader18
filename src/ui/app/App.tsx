import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import './App.css';
import Sidebar from "../sidebar/Sidebar";
import {Route} from "react-router";
import Batching from "../content/batching/Batching";
import SuspensePage from '../content/suspense-page/SuspensePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-grid">
        <Sidebar/>
        <Routes>
          <Route path="/batching/*" element={<Batching/>}/>
        </Routes>
        <Routes>
          <Route path="/suspense/*" element={<SuspensePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
