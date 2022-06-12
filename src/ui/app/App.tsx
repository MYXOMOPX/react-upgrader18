import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import './App.css';
import Sidebar from "../sidebar/Sidebar";
import {Route} from "react-router";
import Batching from "../content/batching-page/BatchingPage";
import SuspensePage from '../content/suspense-page/SuspensePage';
import TransactionPage from '../content/transitions-page/TransitionPage';
import DeferredPage from '../content/deferred-page/DeferredPage';

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
        <Routes>
          <Route path="/transitions/*" element={<TransactionPage/>}/>
        </Routes>
        <Routes>
          <Route path="/deferred/*" element={<DeferredPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
